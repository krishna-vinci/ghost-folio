/* Scroll reveal: elements below the fold fade and rise once as they enter view.
Nothing is hidden unless this script runs, and nothing at all under reduced motion. */
(function () {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = document.querySelectorAll(
        '.kq-section-header, .kq-project-card, .kq-video-featured, .kq-video-card, .kq-writing-list li, .kq-now > *, .kq-subscribe .gh-cta-inner > *, .kq-collection .kq-page-header'
    );
    if (!targets.length) return;

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
        });
    }, {rootMargin: '0px 0px -8% 0px', threshold: 0.05});

    let index = 0;
    targets.forEach(function (el) {
        // Anything already on screen stays as it is: no flash, no layout work
        if (el.getBoundingClientRect().top < viewportHeight * 0.92) return;
        el.classList.add('kq-reveal');
        el.style.setProperty('--kq-delay', (index % 3) * 80 + 'ms');
        index += 1;
        observer.observe(el);
    });
})();
