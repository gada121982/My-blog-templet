window.onload = function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
     
        grabCursor: true,
        centeredSlides: true,  
        loop : true ,
        slidesPerView: 3,
        spaceBetween: 25,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        autoplay: {
            delay: 1000,
        },
        breakpoints: {
                1100: {
                slidesPerView: 2,
                spaceBetween: 20,
                },
                700: {
                    slidesPerView: 1,
                     spaceBetween: 20, 
                }
       
        }
    })
  };