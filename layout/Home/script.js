document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const indicators = document.querySelectorAll(".indicator");
  let index = 0;

  function updateIndicators() {
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
    });
  }

  function showNextSlide() {
    index++;
    if (index >= indicators.length) {
      index = 0;
    }
    slides.style.transform = `translateX(${-index * 100}%)`;
    updateIndicators();
  }

  function showPreviousSlide() {
    index--;
    if (index < 0) {
      index = indicators.length - 1;
    }
    slides.style.transform = `translateX(${-index * 100}%)`;
    updateIndicators();
  }

  setInterval(showNextSlide, 3000);
  updateIndicators();

  indicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
      index = i;
      slides.style.transform = `translateX(${-index * 100}%)`;
      updateIndicators();
    });
  });
});
