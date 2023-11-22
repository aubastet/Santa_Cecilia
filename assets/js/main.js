 
//*-----slider-productos-----**/
const swiper = new Swiper('.swiper-custom', {
    // Optional parameters
    spaceBetween: 15,
    direction: 'horizontal',
    loop: true,
    //autoplay: {
     //   delay: 100000,
   // },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
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
        }
    }

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
   
    spaceBetween: 1,
    direction: 'horizontal',
    loop: true,
   // autopla: {
       // delay: 100000,
   // },


    // If we need pagination
    pagination: {
        el: '.logos_pagination',
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
        }
    }

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
const containertForm = document.querySelector("#container_form");
const innerContainer = document.querySelector("#inner_container");
const iconoOrange = document.querySelector(".icono_naranja");

//event Listenner
iconoOrange.addEventListener("click", () => {
    if (innerContainer.classList.contains("container_isopen"))
    {
        innerContainer.classList.remove("container_isopen") 
    } else 

    {
        innerContainer.classList.add("container_isopen") 
    }
    
});

