// $(document).ready(function (){
// var modal = $('.modal'),
//   modalBtn = $('[data-toggle=modal]'),
//   closeBtn = $('.modal__close');
//   modalBtn.on('click', function () {
//     modal.toggleClass('modal--visible');
//   });
//   closeBtn.on('click', function () {
//     modal.toggleClass('modal--visible');
//   });
// });

// $(document).ready(function (){
//   var feedback = $('.feedback'),
//   feedbackBtn = $('[data-toggle=feedback]'),
//   closeBtn = $('.feedback__close');
//   feedbackBtn.on('click', function () {
//     feedback.toggleClass('feedback--visible');
//   });
//   closeBtn.on('click', function () {
//     feedback.toggleClass('feedback--visible');
//   });
// });

// new WOW().init();

//Smooth Scrolling Using Navigation Menu
$('a[href*="#"]').on('click', function(e){
  $('html,body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 100
  },500);
  e.preventDefault();
});

// $(document).ready(function() {
//  var scrollBtn = $('#scroll_top');
//  $(window).scroll (function () {
//    if ($(this).scrollTop () > 400) {
//      scrollBtn.fadeIn();
//    } else {
//      scrollBtn.fadeOut();
//    }
// });
// scrollBtn.on('click', function(){
// $('body, html').animate({
// scrollTop: 0
// }, 800);
// return false;
// });
// });

// swiper slide
var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var next = $('.swiper-button-next');
var prev = $('.swiper-button-prev');

// forms
$('.modal__form').validate({
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2
    },
    userPhone: "required",
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв"
    },
    userPhone: "Телефон обязателен",
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function(response) {
        $(form)[0].reset();
        $('.feedback').fadeIn();
        $('.feedback').css('display', 'flex');
      },
      error: function(response) {
        console.error('Ошибка запроса' + response);
      }
    });
  }
});

$('.footer__form').validate({
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2
    },
    userEmail: {
      required: true,
      email: true
    },
    userPhone: "required",
    // compound rule
    userMessage: {
      required: true,
    },
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв"
    },
    userEmail: {
      required: "Заполните поле",
      email: "Введите корректный email",
    },
    userPhone: "Телефон обязателен",
    userMessage: {
      required: "Заполните поле",
    },
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function(response) {
        $(form)[0].reset();
        $('.feedback').fadeIn();
        $('.feedback').css('display', 'flex');
      },
      error: function(response) {
        console.error('Ошибка запроса' + response);
      }
    });
  }
});

$('.price__form').validate({
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2
    },
    userEmail: {
      required: true,
      email: true
    },
    userLink: {
      required: true,
    },
    userPhone: "required",
    // compound rule
    userMessage: {
      required: true,
    },
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв"
    },
    userEmail: {
      required: "Заполните поле",
      email: "Введите корректный email",
    },
    userLink: {
      required: "Заполните поле",
    },
    userMessage: {
      required: "Заполните поле",
    },
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function(response) {
        $(form)[0].reset();
        $('.feedback').fadeIn();
        $('.feedback').css('display', 'flex');
      },
      error: function(response) {
        console.error('Ошибка запроса' + response);
      }
    });
  }
});

// mask phone
  $('[type=tel]').mask('+7 000 000-00-00', {placeholder: "+7 ___ ___-__-__"});