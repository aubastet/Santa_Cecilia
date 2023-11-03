const fadeElement = document.getElementById('fade-in-element');

function checkFade() {
  const elementTop = fadeElement.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementTop < windowHeight) {
    fadeElement.classList.add('fade-in'); 
  }
}


window.addEventListener('load', checkFade);


window.addEventListener('scroll', checkFade);


document.querySelector(".next-button").addEventListener("click", nextSlide);
document.querySelector(".prev-button").addEventListener("click", prevSlide);

const images = document.querySelectorAll(".slider-image");
console.log(images);
let currentIndex = 0;

function showImage(index) {

  images.forEach((image) => {
    image.style.opacity = 0;
  });

  images[index].style.opacity = 1;
  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

showImage(currentIndex);

function autoPlay() {
  nextSlide();
  setTimeout(autoPlay, 4000);
}

autoPlay();



(function () {
    "use strict";

    var SITE = SITE || {};
    SITE.var = {};
    SITE.var.window = jQuery(window);

    var $j = jQuery.noConflict();

    SITE.page = {
        init: function () {
            
        }
    };

    SITE.onReady = {
        init: function () {

            SITE.page.init();
        }
    };

    SITE.onLoad = {
        init: function () {
            
        }
    };

    $j(function () {
        SITE.onReady.init();
    });

    $j(window).on('load', SITE.onLoad.init);
})();
