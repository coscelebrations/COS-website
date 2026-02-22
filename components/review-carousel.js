/**
 * Review Carousel - COS Celebrations
 * Loads reviews from JSON and creates an interactive carousel
 */

class ReviewCarousel {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error('Review carousel container not found:', containerId);
      return;
    }

    this.options = {
      brand: options.brand || 'cos', // 'cos' or 'ae'
      jsonPath: options.jsonPath || '/data/reviews.json',
      autoplay: options.autoplay || false,
      autoplaySpeed: options.autoplaySpeed || 5000,
      visibleCards: options.visibleCards || 3,
      ...options
    };

    this.currentIndex = 0;
    this.reviews = [];
    this.track = null;
    this.cardWidth = 0;
    this.gap = 24; // 1.5rem

    this.init();
  }

  async init() {
    try {
      await this.loadReviews();
      this.render();
      this.setupEventListeners();
      if (this.options.autoplay) {
        this.startAutoplay();
      }
    } catch (error) {
      console.error('Failed to initialize review carousel:', error);
      this.renderError();
    }
  }

  async loadReviews() {
    // Check if reviews are passed directly in options
    if (this.options.reviews && Array.isArray(this.options.reviews)) {
      this.reviews = this.options.reviews;
      return;
    }

    // Otherwise load from JSON
    const response = await fetch(this.options.jsonPath);
    if (!response.ok) throw new Error('Failed to load reviews');
    const data = await response.json();
    this.reviews = data[this.options.brand] || [];
  }

  render() {
    if (this.reviews.length === 0) {
      this.container.innerHTML = '<p style="text-align: center; color: #666;">No reviews available.</p>';
      return;
    }

    const carouselHTML = `
      <div class="review-carousel-wrapper">
        <button class="review-nav prev" aria-label="Previous reviews">&#8249;</button>

        <div class="review-cards-viewport">
          <div class="review-cards-track">
            ${this.reviews.map((review, index) => this.renderCard(review, index)).join('')}
          </div>
        </div>

        <button class="review-nav next" aria-label="Next reviews">&#8250;</button>
      </div>

      ${this.reviews.length > this.getVisibleCount() ? `
      <div class="review-dots">
        ${Array.from({ length: this.getPageCount() }, (_, i) =>
          `<button class="review-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Go to page ${i + 1}"></button>`
        ).join('')}
      </div>
      ` : ''}
    `;

    this.container.innerHTML = carouselHTML;
    this.track = this.container.querySelector('.review-cards-track');
    this.updateNavState();
  }

  renderCard(review, index) {
    const hasPhoto = review.avatarUrl && review.avatarUrl.length > 0;
    const initial = review.author.charAt(0).toUpperCase();
    const stars = '&#9733;'.repeat(review.rating);
    const isTruncated = review.text.length > 250;
    const escapedText = this.escapeHtml(review.text);

    return `
      <div class="review-card" data-index="${index}">
        <div class="review-author-header">
          <div class="reviewer-avatar${hasPhoto ? ' has-photo' : ''}">
            ${hasPhoto ? `<img src="${this.escapeHtml(review.avatarUrl)}" alt="${this.escapeHtml(review.author)}" class="reviewer-photo" loading="lazy">` : ''}
            <span class="reviewer-initial" data-letter="${initial}">${initial}</span>
          </div>
          <div class="reviewer-info">
            <span class="review-author">${this.escapeHtml(review.author)}</span>
            <span class="review-stars">${stars}</span>
          </div>
        </div>
        <div class="review-quote-wrapper${isTruncated ? ' truncated' : ''}">
          <blockquote class="review-quote">"${escapedText}"</blockquote>
          ${isTruncated ? '<button class="review-expand" aria-label="Expand review">Read more</button>' : ''}
        </div>
        <div class="review-footer">
          <span class="review-date">${this.escapeHtml(review.date)}</span>
          ${review.googleLink ? `<a href="${this.escapeHtml(review.googleLink)}" target="_blank" rel="noopener" class="review-link">Read on Google</a>` : ''}
        </div>
      </div>
    `;
  }

  renderError() {
    this.container.innerHTML = '<p style="text-align: center; color: #666;">Unable to load reviews.</p>';
  }

  setupEventListeners() {
    // Navigation arrows
    const prevBtn = this.container.querySelector('.review-nav.prev');
    const nextBtn = this.container.querySelector('.review-nav.next');

    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());

    // Dots
    const dots = this.container.querySelectorAll('.review-dot');
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const pageIndex = parseInt(dot.dataset.index);
        this.goToPage(pageIndex);
      });
    });

    // Expand buttons
    this.container.querySelectorAll('.review-expand').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const wrapper = e.target.closest('.review-quote-wrapper');
        wrapper.classList.remove('truncated');
        wrapper.classList.add('expanded');
      });
    });

    // Touch/swipe support
    let startX = 0;
    let currentX = 0;
    const viewport = this.container.querySelector('.review-cards-viewport');

    viewport.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
      currentX = e.touches[0].clientX;
    }, { passive: true });

    viewport.addEventListener('touchend', () => {
      const diff = startX - currentX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    });

    // Recalculate on resize
    window.addEventListener('resize', () => {
      this.updateNavState();
    });
  }

  getVisibleCount() {
    const width = window.innerWidth;
    if (width <= 768) return 1;
    if (width <= 1024) return 2;
    return this.options.visibleCards;
  }

  getPageCount() {
    return Math.ceil(this.reviews.length / this.getVisibleCount());
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updatePosition();
    }
  }

  next() {
    const maxIndex = this.reviews.length - this.getVisibleCount();
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
      this.updatePosition();
    }
  }

  goToPage(pageIndex) {
    this.currentIndex = pageIndex * this.getVisibleCount();
    const maxIndex = this.reviews.length - this.getVisibleCount();
    if (this.currentIndex > maxIndex) {
      this.currentIndex = maxIndex;
    }
    this.updatePosition();
  }

  updatePosition() {
    if (!this.track) return;

    const card = this.track.querySelector('.review-card');
    if (!card) return;

    const cardWidth = card.offsetWidth + this.gap;
    const offset = this.currentIndex * cardWidth;
    this.track.style.transform = `translateX(-${offset}px)`;

    this.updateNavState();
    this.updateDots();
  }

  updateNavState() {
    const prevBtn = this.container.querySelector('.review-nav.prev');
    const nextBtn = this.container.querySelector('.review-nav.next');
    const maxIndex = this.reviews.length - this.getVisibleCount();

    if (prevBtn) prevBtn.disabled = this.currentIndex === 0;
    if (nextBtn) nextBtn.disabled = this.currentIndex >= maxIndex;
  }

  updateDots() {
    const dots = this.container.querySelectorAll('.review-dot');
    const currentPage = Math.floor(this.currentIndex / this.getVisibleCount());

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentPage);
    });
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      const maxIndex = this.reviews.length - this.getVisibleCount();
      if (this.currentIndex >= maxIndex) {
        this.currentIndex = 0;
        this.updatePosition();
      } else {
        this.next();
      }
    }, this.options.autoplaySpeed);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Auto-initialize carousels with data attribute
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-review-carousel]').forEach(el => {
    const brand = el.dataset.brand || 'cos';
    const jsonPath = el.dataset.jsonPath || '/data/reviews.json';
    new ReviewCarousel(el.id, { brand, jsonPath });
  });
});
