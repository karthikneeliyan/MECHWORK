$(document).ready(function(){
  var windowHeight = $(window).innerHeight();
  // $("#home").height(windowHeight);
  $(".single-item").height(windowHeight);
  // $("#header .single-item img").height(windowHeight);

  var headerTitle = (windowHeight-50)/2;
  var headerTitleM = (windowHeight)/2;
  
  // Margin-top for Mobile and web
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
  if (!isMobile) {
    $('.intro-text').css('margin-top',headerTitle);
  } else {
    $('.intro-text').css('margin-top',headerTitleM);
  }


  $('.single-item').slick({
    // accessibility:true,
    // adaptiveHeight:true,
    // slidesToShow: 1,
    
    autoplay:true,
    autoplaySpeed:5000,
    arrows:false,
    dots: true,
    infinite: true,
    speed:500,
    fade: true,
    cssEase: 'linear',

    pauseOnDotsHover:true,
    mobileFirst:true
  });

  $(window).on('resize orientationchange', function() {
    //may be required to do the code for the responsivness 
    //$('.single-item').slick('resize');
  });

  /*====================================
    Typed JS
  ======================================*/
  // $(".brand").typed({
  //   strings: ["The Mech Work"],
  //   typeSpeed: 150,
  //   backSpeed:50,
  //   backDelay:500,
  //   startDelay:500,
  //   contentType:'html',
  //   loop:true
  // });

  /*====================================
    Show Menu
  ======================================*/
  $(window).bind('scroll', function(){
    var navHeight = $(window).height()-500;
    if ($(window).scrollTop()>navHeight) {
      $('.navbar-default').addClass('on');
    }else{
      $('.navbar-default').removeClass('on');
    }
  });

  $('body').scrollspy({ 
      target: '.navbar-fixed-top',
      offset: 80
  });

  /*====================================
    Smooth Scroll
  ======================================*/
  $("nav a, .smooth-btn").on('click', function(event) {
    
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } // End if
  });

  /*====================================
    NivoLightBox 
  ======================================*/
  $('a').nivoLightbox({
    effect: 'fade',
    theme: 'default',
    keyboardNav: true,
    clickImgToClose: false,
    clickOverlayToClose: true,
    errorMessage: 'The requested content cannot be loaded. Please try again later.'
  });

  /*====================================
    Counterup Initialisation 
  ======================================*/ 
  // $('.counter').counterUp({
  //   delay: 10,
  //   time: 2500
  // });

});
// Document ready ends here


wow = new WOW({
  animateClass: 'animated',
  offset:       20,
  mobile:       true,       // trigger animations on mobile devices (default is true)
  live:         true,       // act on asynchronously loaded content (default is true)
  callback:     function(box) {
    // console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
  }
}); 
wow.init();
