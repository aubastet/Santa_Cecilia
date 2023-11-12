 
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



/*formulario contenido*/
const containertForm = document.querySelector(".container_formulario_trabaja");
const iconoOrange = document.querySelector(".icono_naranja");

//event Listenner
iconoOrange.addEventListener("click", () => {
    containertForm.style.transform = "translateY(0)"
    containertForm.style.opacity = "1";
    
});

