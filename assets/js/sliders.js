$(document).ready(function () {
  $('.our-features__slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: '<a href="" class="slider-top-arrow left-arrow"><ion-icon name="chevron-back-outline"></ion-icon></a>',
    nextArrow: '<a href="" class="slider-top-arrow right-arrow"><ion-icon name="chevron-forward-outline"></ion-icon></a>'
  });

  $('.certificates-wrap').slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    responsive: [{
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200
      }
    }, {
      breakpoint: 460,
      settings: {
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200

      }
    }]
  });

  $('.mobile-tabbed-nav').slick({
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
    dots: false,
    autoplay: false,
    prevArrow: '<a href="" class="slider-top-arrow left-arrow"><ion-icon name="chevron-back-outline"></ion-icon></a>',
    nextArrow: '<a href="" class="slider-top-arrow right-arrow"><ion-icon name="chevron-forward-outline"></ion-icon></a>'
  });

});

