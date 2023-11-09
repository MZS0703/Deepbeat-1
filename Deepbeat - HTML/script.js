const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % 2;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 360;
  carousel.style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, 3000);