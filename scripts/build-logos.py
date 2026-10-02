#!/usr/bin/env python3
"""
build-logos.py - one-color logo strips for coscelebrations.com (added 2026-10-02)

Reads scripts/logo-sources/manifest.json, takes each raw logo from
~/cos-operations/logo-sources/<brands|venues>/ (kept OUTSIDE the repo on purpose:
Netlify publishes the whole repo root, see memory netlify_publish_root_serves_internal_files),
recolors it to ONE solid color, and writes:

  images/brands/<slug>.svg|webp         homepage "Brands We've Entertained" row
  images/venue-logos/<slug>.svg|webp    city-page "Venues We Play" rows
  scripts/logo-sources/out/<set>.html   paste-ready <li> rows with exact width/height

Tiers (printed per logo):
  svg    clean SVG -> every fill/stroke/opacity stripped, one fill set on the root
  raster anything else (complex SVG, PNG, JPG) -> rsvg-convert/PIL -> alpha mask ->
         solid color + alpha -> lossless WebP at 3x the CSS height
  text   no usable source: emits <span class="brand-strip-text">Name</span>

Usage:  python3 scripts/build-logos.py [set ...]      (default: every set)
Python 3.9 + PIL only. rsvg-convert must be on PATH (/opt/homebrew/bin).
"""
import json, math, os, re, subprocess, sys, tempfile
import xml.etree.ElementTree as ET
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent          # cos-website/
MANIFEST = ROOT / "scripts" / "logo-sources" / "manifest.json"
OUT_HTML = ROOT / "scripts" / "logo-sources" / "out"
RSVG = "/opt/homebrew/bin/rsvg-convert"
SVG_NS = "http://www.w3.org/2000/svg"
XLINK_NS = "http://www.w3.org/1999/xlink"
SCALE = 3                                                # raster at 3x CSS px
COMPLEX = ("<style", "Gradient", "<mask", "<clipPath", "<filter", "<image", "<text", "<pattern", "<use")
STRIP_ATTRS = ("fill", "stroke", "style", "opacity", "fill-opacity", "stroke-opacity", "color",
               "stop-color", "class", "id")
SIZE_CLASS = {"tall": " class=\"logo-tall\"", "short": " class=\"logo-short\"", "xshort": " class=\"logo-xshort\"", "": ""}


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace('"', "&quot;")


def ascii_only(s):
    bad = [c for c in s if ord(c) > 127]
    if bad:
        raise SystemExit("non-ASCII in output (Rule #15): %r" % bad)
    return s


# ---------- tier 1: clean SVG ----------
def svg_is_clean(path):
    txt = path.read_text(errors="replace")
    return not any(k in txt for k in COMPLEX)


def clean_svg(src, dst, color):
    ET.register_namespace("", SVG_NS)
    ET.register_namespace("xlink", XLINK_NS)
    tree = ET.parse(src)
    root = tree.getroot()
    tree_root_size = {k: root.get(k) for k in ("width", "height") if root.get(k)}

    def walk(el):
        for ch in list(el):
            tag = ch.tag
            ns = tag[1:].split("}")[0] if tag.startswith("{") else ""
            local = tag.split("}")[-1]
            if ns and ns != SVG_NS or local in ("metadata", "title", "desc"):
                el.remove(ch)
                continue
            had_none = ch.get("fill") == "none"
            had_stroke = ch.get("stroke") not in (None, "none")
            for a in list(ch.attrib):
                base = a.split("}")[-1]
                if base in STRIP_ATTRS or a.startswith("{"):
                    del ch.attrib[a]
            if had_none:
                ch.set("fill", "none")
                if had_stroke:
                    ch.set("stroke", color)
            walk(ch)
    walk(root)
    for a in list(root.attrib):
        if a.split("}")[-1] in STRIP_ATTRS + ("width", "height") or a.startswith("{"):
            del root.attrib[a]
    if "viewBox" not in root.attrib:                   # ufhealth-full.svg ships width/height only
        w, h = (re.sub(r"[^0-9.]", "", tree_root_size.get(k, "")) for k in ("width", "height"))
        if not (w and h):
            raise ValueError("no viewBox and no width/height")
        root.set("viewBox", "0 0 %s %s" % (w, h))
    root.set("fill", color)
    vb = [float(x) for x in re.split(r"[ ,]+", root.get("viewBox").strip())]
    tree.write(dst, encoding="unicode")
    txt = dst.read_text()
    txt = re.sub(r"\s+", " ", txt).replace("> <", "><").strip() + "\n"
    dst.write_text(txt)
    return vb[2] / vb[3]                                 # aspect w/h


# ---------- tier 2: raster ----------
def load_raster(src, px_height):
    if src.suffix.lower() == ".svg":
        tmp = Path(tempfile.mkstemp(suffix=".png")[1])
        subprocess.run([RSVG, "-h", str(px_height * 2), src, "-o", tmp], check=True)
        im = Image.open(tmp).convert("RGBA")
        tmp.unlink()
    else:
        im = Image.open(src).convert("RGBA")
    return im


def stretch(a, floor=20, pct=99.0):
    """Map noise (<floor) to 0 and the pct-th percentile to 255, so a faint mark
    (gold on cream, 9 Aviles) comes out as solid as a black one."""
    hist = a.histogram()
    total = sum(hist)
    cum, top = 0, 255
    for v in range(256):
        cum += hist[v]
        if cum >= total * pct / 100:
            top = v
            break
    top = max(top, floor + 1)
    return a.point(lambda v: max(0, min(255, int((v - floor) * 255 / (top - floor)))))


def alpha_from(im, mode="alpha"):
    """mode: alpha    = use the file's transparency (default)
             luma     = ignore transparency, dark-on-light or light-on-dark by border sample
             knockout = transparency AND darkness, so white text inside a solid badge
                        becomes a hole instead of vanishing into a blob (The White Room)"""
    a = im.getchannel("A")
    lo, hi = a.getextrema()
    g = ImageOps.grayscale(im)
    if mode == "alpha" and lo < 250:
        return a
    if mode == "knockout" and lo < 250:
        dark = ImageOps.invert(g)
        return stretch(_mul(a, dark))
    w, h = g.size
    border = [g.getpixel((x, y)) for x in range(w) for y in (0, h - 1)] + \
             [g.getpixel((x, y)) for y in range(h) for x in (0, w - 1)]
    light_bg = sum(border) / len(border) > 128
    if light_bg:
        g = ImageOps.invert(g)
    return stretch(g)


def _mul(a, b):
    from PIL import ImageChops
    return ImageChops.multiply(a, b)


def raster_logo(src, dst, color, px_height, mode="alpha"):
    im = load_raster(src, px_height)
    a = alpha_from(im, mode)
    box = a.getbbox()
    if not box:
        raise ValueError("empty alpha")
    a = a.crop(box)
    w = max(1, round(a.width * px_height / a.height))
    a = a.resize((w, px_height), Image.LANCZOS)
    rgb = tuple(int(color[i:i + 2], 16) for i in (1, 3, 5))
    out = Image.new("RGBA", a.size, rgb + (0,))
    out.putalpha(a)
    out.save(dst, "WEBP", lossless=True, method=6)
    return a.width / a.height


# ---------- main ----------
def build_set(name, cfg, color, src_root):
    out_dir = ROOT / cfg["out"]
    out_dir.mkdir(parents=True, exist_ok=True)
    base_h = cfg.get("height", 28)
    sizes = cfg.get("sizes", {"tall": 36, "short": 22, "xshort": 18})
    rows, total = [], 0
    for it in cfg["items"]:
        slug, label = it["slug"], it["name"]
        size = it.get("size", "")
        css_h = sizes.get(size, base_h)
        src = (src_root / cfg["src_dir"] / it["src"]) if it.get("src") else None
        tier, img_tag = "text", None
        if src and src.exists():
            try:
                if src.suffix.lower() == ".svg" and svg_is_clean(src) and not it.get("force_raster"):
                    dst = out_dir / (slug + ".svg")
                    aspect = clean_svg(src, dst, color)
                    tier = "svg"
                else:
                    dst = out_dir / (slug + ".webp")
                    aspect = raster_logo(src, dst, color, css_h * SCALE, it.get("mode", "alpha"))
                    tier = "raster"
                w1 = math.ceil(css_h * aspect)
                total += dst.stat().st_size
                img_tag = ('<img src="/%s/%s" alt="%s" width="%d" height="%d"%s loading="lazy" decoding="async">'
                           % (cfg["out"], dst.name, esc(label), w1, css_h, SIZE_CLASS[size]))
                print("  %-7s %-28s %4d x %2d  %5.1f KB" % (tier, dst.name, w1, css_h, dst.stat().st_size / 1024))
            except Exception as e:
                print("  FAILED %-28s %s -> text fallback" % (slug, e))
                tier = "text"
        elif src:
            print("  MISSING %-27s %s -> text fallback" % (slug, src))
        if tier == "text":
            print("  text    %s" % slug)
            inner = '<span class="brand-strip-text">%s</span>' % esc(label)
        else:
            inner = img_tag
        if cfg.get("link"):
            href = it.get("page") or cfg["link"].format(slug=slug)   # "page" overrides when the venue page slug differs
            inner = '<a href="%s" title="%s wedding DJ">%s</a>' % (href, esc(label), inner)
        rows.append("      <li>%s</li>" % inner)
    html = "\n".join(rows) + "\n"
    OUT_HTML.mkdir(parents=True, exist_ok=True)
    (OUT_HTML / (name + ".html")).write_text(ascii_only(html))
    print("  -> %s  (%d items, %.1f KB of assets)" % (OUT_HTML / (name + ".html"), len(rows), total / 1024))


def main():
    m = json.loads(MANIFEST.read_text())
    color = m.get("color", "#6B6668")
    src_root = Path(os.path.expanduser(m["source_dir"]))
    wanted = sys.argv[1:] or list(m["sets"])
    for name in wanted:
        print("[%s]" % name)
        build_set(name, m["sets"][name], color, src_root)


if __name__ == "__main__":
    main()
