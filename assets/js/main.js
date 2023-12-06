//*-----slider-productos-----**/
const swiper = new Swiper(".swiper-custom", {
    // Optional parameters
    spaceBetween: 15,
    direction: "horizontal",
    loop: true,
    //autoplay: {
    //   delay: 100000,
    // },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
});

//*-----slider-logos-----**/
const swiper2 = new Swiper(".swiper_logos", {
    // Optional parameters

    spaceBetween: 1,
    direction: "horizontal",
    loop: true,
    // autopla: {
    // delay: 100000,
    // },

    // If we need pagination
    pagination: {
        el: ".logos_pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 6,
        },
    },
});

//*-----slider-catalogo-----**/
const swiper3 = new Swiper(".swiper-catalogo", {
    // Optional parameters
    spaceBetween: 1,
    loop: true,
    // autopla: {
    // delay: 100000,
    // },

    // If we need pagination
    pagination: {
        el: ".catalogo-pagination",
        clickable: true,
    },
});

//*-----slider-catalogo-ampliacion----**/
const swiper4 = new Swiper(".swiper-imagenes", {
    spaceBetween: 1,
    loop: true,
    // autopla: {
    // delay: 100000,
    // },

    // If we need pagination
    pagination: {
        el: ".imagenes-pagination",
        clickable: true,
    },
});

/*formulario contenido*/
const containertForm = document.querySelector("#container_form");
const innerContainer = document.querySelector("#inner_container");
const iconoOrange = document.querySelector(".icono_naranja");

//event Listenner
iconoOrange.addEventListener("click", () => {
    if (innerContainer.classList.contains("container_isopen")) {
        innerContainer.classList.remove("container_isopen");
    } else {
        innerContainer.classList.add("container_isopen");
    }
});

let hover = document.querySelector(".hover_img");
/*  hover.mouseover(() => {
          $("#hover").attr("src", "assets/img/Rectangle_hover.png");
          $("#hover").css("transition", "all 5.s ease-in-out");
      }); */

$("#img1").mouseover(() => {
    $("#img1").attr("src", "assets/img/Rectangle_hover.png");
});
$("#img1").mouseout(() => {
    $("#img1").attr("src", "assets/img/slider_img.png");
});

$("#img2").mouseover(() => {
    $("#img2").attr("src", "assets/img/Rectangle_hover.png");
});
$("#img2").mouseout(() => {
    $("#img2").attr("src", "assets/img/slider_img.png");
});
$("#img3").mouseover(() => {
    $("#img3").attr("src", "assets/img/Rectangle_hover.png");
});
$("#img3").mouseout(() => {
    $("#img3").attr("src", "assets/img/slider_img.png");
});

$("#img4").mouseover(() => {
    $("#img4").attr("src", "assets/img/Rectangle_hover.png");
});
$("#img4").mouseout(() => {
    $("#img4").attr("src", "assets/img/slider_img.png");
});

$("#img5").mouseover(() => {
    $("#img5").attr("src", "assets/img/Rectangle_hover.png");
});
$("#img5").mouseout(() => {
    $("#img5").attr("src", "assets/img/slider_img.png");
});
$("#img6").mouseover(() => {
    $("#img6").attr("src", "assets/img/Rectangle_hover.png");
});
$("#img6").mouseout(() => {
    $("#img6").attr("src", "assets/img/slider_img.png");
});

/**-----hover--gray filter---button orange----**/
$(document).ready(() => {
    $('.content_row').mouseover(function() {
        $(this).find('img').css('filter', 'grayscale(100%)');
        $(this).find('.icon_more_container').css('background', '#ec3237');
        $(this).find('.icon_more_container').css('border-radius', '50%');
    });

    $('.content_row').mouseout(function() {
        $(this).find('img').css('filter', 'grayscale(0%)');
        $(this).find('.icon_more_container').css('background', 'transparent');
    });
});