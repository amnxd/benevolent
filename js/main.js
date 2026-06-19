/* ════════════════════════════════════════════
   BENEVOLENT — Landing Page Script
   ════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── NAV: scrolled state ─── */
  var nav = document.getElementById('nav');
  var lastScrollY = window.scrollY;

  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ─── NAV: mobile toggle ─── */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a link is tapped
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ─── SCROLL REVEAL ─── */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });

    // Safety net: if an element somehow never intersects (edge cases with
    // certain screen readers, automated tools, or unusual viewports),
    // force it visible after a short delay so content is never lost.
    setTimeout(function () {
      revealEls.forEach(function (el) {
        el.classList.add('is-visible');
      });
    }, 2500);
  } else {
    // Fallback: just show everything
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ─── SMOOTH ANCHOR SCROLL (with nav offset) ─── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId.length < 2) return;
      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      var navHeight = nav ? nav.offsetHeight : 0;
      var targetY = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    });
  });

})();
