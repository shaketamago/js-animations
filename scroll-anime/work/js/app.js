const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('displayed', entry.isIntersecting);
  });
});

boxes.forEach((box) => {
  observer.observe(box);
});