let offer=document.getElementById("offernav")
let closebtn=document.getElementById("closenav")
closebtn.addEventListener("click",function(){
offer.style.display ='none';
})
window.onload = function () {
  let currentSlide = 0;
  const totalSlides = 5;
  const slideWrapper = document.getElementById("slideWrapper");

  function updateSlidePosition() {
    slideWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  window.nextSlide = function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
  };

  window.prevSlide = function () {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  };
};
