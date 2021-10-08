const sliderInner = document.querySelector('.slider-inner .swiper');
if(sliderInner){
  const slider = new Swiper(sliderInner, {
    slidePreView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}