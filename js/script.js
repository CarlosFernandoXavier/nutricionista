const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.3,
  rootMargin: "0px 0px -80px 0px"
});

reveals.forEach(el => observer.observe(el));


const items = document.querySelectorAll('.reveal-item');

const observerItems = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      items.forEach((el, i) => {
        setTimeout(() => {
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
        }, i * 120);
      });
    }
  });
}, { threshold: 0.3 });

items.forEach(el => observerItems.observe(el));
