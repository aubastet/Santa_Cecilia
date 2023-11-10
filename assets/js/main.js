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



(function() {
    "use strict";

    var SITE = SITE || {};
    SITE.var = {};
    SITE.var.window = jQuery(window);

    var $j = jQuery.noConflict();

    SITE.page = {
        init: function() {

        }
    };

    SITE.onReady = {
        init: function() {

            SITE.page.init();
        }
    };

    SITE.onLoad = {
        init: function() {

        }
    };

    $j(function() {
        SITE.onReady.init();
    });

    $j(window).on('load', SITE.onLoad.init);
})();

//*-----slider-productos-----**/
const swiper = new Swiper('.swiper-custom', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 15,
    direction: 'horizontal',
    loop: true,
    autopla: {
        delay: 100000,
    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    /* navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     } */

    // And if we need scrollbar
    /*scrollbar: {
      el: '.swiper-scrollbar',
    }, */


}); 


 //*-----slider-logos-----**/
const swiper2 = new Swiper('.swiper_logos', {
    // Optional parameters
    slidesPerView: 10,
    spaceBetween: 1,
    direction: 'horizontal',
    loop: true,
    autopla: {
        delay: 100000,
    },


    // If we need pagination
    pagination: {
        el: '.logos_pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    /* navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     } */

    // And if we need scrollbar
    /*scrollbar: {
      el: '.swiper-scrollbar',
    }, */


}); 