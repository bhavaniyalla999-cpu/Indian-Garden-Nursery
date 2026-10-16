document.addEventListener('DOMContentLoaded', () => {

    // ── 1. Navbar Sticky ──────────────────────────────────────────
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // ── 2. Mobile Menu ────────────────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ── 3. Hero Slider (FIX: was missing entirely) ────────────────
    const slides   = document.querySelectorAll('.slide');
    const dots     = document.querySelectorAll('.dot');
    const prevBtn  = document.querySelector('.slider-arrow.prev');
    const nextBtn  = document.querySelector('.slider-arrow.next');

    if (slides.length > 1) {
        let currentSlide = 0;

        function goToSlide(n) {
            slides[currentSlide].classList.remove('active');
            if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) dots[currentSlide].classList.add('active');
        }

        if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

        // Dot click handlers
        dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));

        // Auto-play every 5 seconds
        let sliderInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);

        // Pause on hover
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.addEventListener('mouseenter', () => clearInterval(sliderInterval));
            hero.addEventListener('mouseleave', () => {
                sliderInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
            });
        }
    }

    // ── 4. Animated Counters ──────────────────────────────────────
    const counters = document.querySelectorAll('.counter-num');
    if (counters.length > 0) {
        let started = false;
        const startCounters = () => {
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                let count = 0;
                const step = Math.ceil(target / 60);
                const timer = setInterval(() => {
                    count += step;
                    if (count >= target) {
                        count = target;
                        clearInterval(timer);
                        counter.innerText = target + (target >= 100 ? '+' : '');
                    } else {
                        counter.innerText = count;
                    }
                }, 25);
            });
        };
        const onScroll = () => {
            const section = counters[0].closest('.counters');
            if (section && section.getBoundingClientRect().top < window.innerHeight && !started) {
                started = true;
                startCounters();
                window.removeEventListener('scroll', onScroll);
            }
        };
        window.addEventListener('scroll', onScroll);
    }

    // ── 5. Parallax for floating plant SVGs (guarded) ─────────────
    const plant1 = document.querySelector('.plant-1');
    const plant2 = document.querySelector('.plant-2');
    const plant3 = document.querySelector('.plant-3');
    if (plant1 || plant2 || plant3) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (plant1) plant1.style.transform = `translateY(${scrollY * 0.3}px)`;
            if (plant2) plant2.style.transform = `translateY(${scrollY * -0.2}px)`;
            if (plant3) plant3.style.transform = `translateY(${scrollY * 0.5}px)`;
        });
    }

    // ── 6. Back-to-top floating button ────────────────────────────
    const backTopBtn = document.querySelector('.btn-up');
    if (backTopBtn) {
        window.addEventListener('scroll', () => {
            backTopBtn.classList.toggle('show', window.scrollY > 400);
        });
        backTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // ── 7. Scroll-reveal animation for sections ───────────────────
    const revealEls = document.querySelectorAll('.plant-card, .service-card, .category-card, .review-card');
    if ('IntersectionObserver' in window && revealEls.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealEls.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });
    }

});

// ── Global cart helper (FIX: was missing — caused ReferenceError on all pages) ──
function addToCartGlobal(id, name, price, img) {
    if (typeof Cart === 'undefined') {
        console.error('Cart module not loaded');
        return;
    }
    Cart.addToCart({ id, name, price, img });
}
