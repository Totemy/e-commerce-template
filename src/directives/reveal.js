// A safety timer forces the fade-in even if IntersectionObserver never fires
// (e.g. a background tab), so an element can never stay stuck at opacity 0.
const SAFETY_DELAY = 1500;

const show = (el) => {
  el.classList.add('is-visible');
};

const observer = typeof IntersectionObserver !== 'undefined'
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        show(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 })
  : null;

export const reveal = {
  mounted(el) {
    const belowFold = el.getBoundingClientRect().top > window.innerHeight;
    if (!observer || !belowFold) {
      el.classList.add('reveal', 'is-visible');
      return;
    }
    el.classList.add('reveal');
    observer.observe(el);
    el._revealTimer = setTimeout(() => {
      if (el.classList.contains('is-visible')) return;
      show(el);
      observer.unobserve(el);
    }, SAFETY_DELAY);
  },
  unmounted(el) {
    clearTimeout(el._revealTimer);
    if (observer) observer.unobserve(el);
  }
};
