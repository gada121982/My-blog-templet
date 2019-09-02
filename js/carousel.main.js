window.onload = function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
     
        grabCursor: true,
        centeredSlides: true,  
        loop : true ,
        slidesPerView: 4,
        
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            
            1300:{
                slidesPerView: 3,
            },
            800:{
                slidesPerView: 2,
            },
            610:{
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            }
          
   
        }
    })
  };