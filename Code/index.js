if(window.outerWidth > 1024){
    let swiper = new Swiper(".mySwiper", {
      loop:true,
      autoplay:true,
      autoplayTimeout:1000,
      // autoplayHoverPause : true,
      // effect : "coverflow",
      grabCursor : true,
      centeredSliders : true,
      slidesPerView : "auto",
      slidesPerView: 3,
      spaceBetween: 30,
      // coverflowEffect : {
      //   rotate : 0,
      //   stretch : 0,
      //   depth : 300,
      //   modifier : 1,
      //   sideShadows : false
  
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  
  }
  else{
    let swiper = new Swiper(".mySwiper", {
      loop:true,
      autoplay:true,
      autoplayTimeout:1000,
      // autoplayHoverPause : true,
      // effect : "coverflow",
      grabCursor : true,
      centeredSliders : true,
      slidesPerView : "auto",
      slidesPerView: 1,
      spaceBetween: 30,
      // coverflowEffect : {
      //   rotate : 0,
      //   stretch : 0,
      //   depth : 300,
      //   modifier : 1,
      //   sideShadows : false
  
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  
  }


let  swiper01 = new Swiper(".mySwiper01", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });