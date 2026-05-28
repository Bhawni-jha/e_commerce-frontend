const imageSwiper = new Swiper(".imageSwiper", {

  loop: true,

  speed: 1000,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".image-next",
    prevEl: ".image-prev",
  },

});

const frameSwiper = new Swiper(".frameSwiper", {

  loop: true,

  speed: 1000,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".frame-pagination",
    clickable: true,
  },

});