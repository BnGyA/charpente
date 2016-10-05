(function($) {

  /*-----------------------------------------------------------------------------------*/
  /*	Outdated
  /*-----------------------------------------------------------------------------------*/
  //Désolé IE :(
  outdatedBrowser({
    bgColor: '#00A0E6',
    color: '#ffffff',
    lowerThan: 'transform',
    languagePath: ''
  });


  $('#devis').click(function(e){
    e.preventDefault();
    openDevis();
  });
  /*-----------------------------------------------------------------------------------*/
  /*	Pic1 Fixed inview
  /*-----------------------------------------------------------------------------------*/

  $("#pic1").stick_in_parent();
  $(window).on("load",function(){
    $(".process_list").mCustomScrollbar({
      theme:"dark"
    });
  });

  /*-----------------------------------------------------------------------------------*/
  /*	NAVBAR GESTION
  /*-----------------------------------------------------------------------------------*/

  $('#navbara').click(function(e){
    e.preventDefault();
    $('#menu').toggleClass('closed');
    openMenu();
  });


  function openMenu(){
    var tl = new TimelineLite();
    tl.to("#loader", 0 , {width:"0", left:"0", right:"auto"})
    .to("#loader", 0.5 , {opacity:"1", width:'100%'})
    .to("#loader", 0.5 , {opacity:"1", width:'0%', left:"auto", right:"0"})
    .to("#menu", 0, {left:'0%', right:"auto", delay:"-0.5"})
    .to("#illuLeft", 0.4 , {height:"50%", ease:Linear.easeInOut, delay:"-0.2"})
    .to("#illuRight", 0.4 , {height:"50%", ease:Linear.easeInOut, delay:"-0.4"})
  };

  function closeMenu(){
    var tl = new TimelineLite();
    tl.to("#loader", 0 , {width:"0", left:"0", right:"auto"})
    .to("#illuLeft", 0.4 , {height:"0", ease:Linear.easeInOut})
    .to("#illuRight", 0.4 , {height:"0", ease:Linear.easeInOut, delay:"-0.2"})
    .to("#loader", 0.5 , {opacity:"1", width:'100%'})
    .to("#loader", 0.5 , {opacity:"1", width:'0%', left:"auto", right:"0"})
    .to("#menu", 0, {left:'-100%', right:"auto", delay:"-0.5"})

  };

  function openDevis(){
    var tl = new TimelineLite();
    tl.to("#loader", 0 , {width:"0", left:"0", right:"auto"})
    .to("#loader", 0.5 , {opacity:"1", width:'100%'})
    .to("#contact", 0, {left:'0'})
    .to("#loader", 0.5 , {opacity:"1", width:'0%', left:"auto", right:"0"})
  };




  function closeDevis(){
    var tl = new TimelineLite();
    tl.to("#loader", 0 , {width:"0", left:"0", right:"auto"})
    .to("#loader", 0.5 , {opacity:"1", width:'100%'})
    .to("#contact", 0, {left:'-100%'})
    .to("#loader", 0.5 , {opacity:"1", width:'0%', left:"auto", right:"0"})
  };

  function animLogo(){
    var tl = new TimelineLite();
    tl.to("#logo", 0 , {opacity: '0', transform:  'scale(0)'})
    .to("#logo", 2 , {opacity:"1", transform: 'scale(1)'})
    console.log('yolo');
  };

  /*-----------------------------------------------------------------------------------*/
  /*	ScrollTo
  /*-----------------------------------------------------------------------------------*/
  var sections = [];
  var id = false;
  var $navbar = $('#menu');
  var $navbara = $('.container a', $navbar);


function close(){
  $('#menu').toggleClass('closed');
  closeMenu();
}

$("#fa-menu").click(function(e){
  close();
});

$("#fa-devis").click(function(e){
  closeDevis();
});

$("#devisFooter").click(function(e){
  e.preventDefault();
  openDevis();
});

$('.link').click(function(e){
    setTimeout(close, 0);
  });



  $('#scroll').click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    });
    hash($(this).attr('href'));
  });

  $navbara.click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    });
    hash($(this).attr('href'));
  });

  $navbara.each(function(){
    sections.push($($(this).attr('href')));
  });

  $(window).scroll(function(e){
    var scrollTop = $(this).scrollTop() + ($(window).height() / 2)
    for(var i in sections){
      var section = sections[i];
      if (scrollTop > section.offset().top) {
        scrolled_id = section.attr('id');
      }
    }
    if (scrolled_id !== id) {
      id = scrolled_id;
      $navbara.removeClass('current');
      hash($('a[href="#' + id + '"]', $navbar).attr('href'));
      $('a[href="#' + id + '"]', $navbar).addClass('current');
    }
  });


  hash = function(h) {
    if (history.pushState) {
      history.pushState(null, null, h);
    }else{
      location.hash = h;
    }
  }


  /*-----------------------------------------------------------------------------------*/
  /*	FAQ
  /*-----------------------------------------------------------------------------------*/
  var action = "click";
  var speed = "500";

  $('li.q').on(action, function(){
    $(this).next().slideToggle(speed)
    .siblings('p.a').slideUp();
    $('li.q').removeClass('active');
    $(this).addClass('active');
  });


  /*-----------------------------------------------------------------------------------*/
  /*	Slider section 3
  /*-----------------------------------------------------------------------------------*/
  $("#pic3").owlCarousel({
    navigation : false, // Show next and prev buttons
    pagination : false, // Show next and prev buttons
    slideSpeed : 500,
    paginationSpeed : 400,
    singleItem:true,
    items:1,
    loop:true,
    autoplaySpeed:500,
    autoplayTimeout:2000,
    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
    lazyLoad:true,
    autoplay:true,
    transitionStyle:"fade"
  });

  /*-----------------------------------------------------------------------------------*/
  /*	Waypoint open menu
  /*-----------------------------------------------------------------------------------*/

  var waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
      $('#navbar').toggleClass('is-really-closed');
      $('#logo_fixed').toggleClass('is-really-closed');
    },
    offset: '75%'
  });


  /*-----------------------------------------------------------------------------------*/
  /*	Preloader opening
  /*-----------------------------------------------------------------------------------*/
  $(window).load(function() {
    $(".se-pre-con").fadeOut("slow");
    $(function () {
    	var options = {
    		facebookId: 'diplostudio',
        hideTitle: true,
    		albums: [
    			'Timeline photos'
    		],
    		maxCount: 10
    	}
    	//start filo
    	$('#js-filojs').filo(options);
    });
    init();
    animLogo();
  });

  function init(){

    var a = document.getElementById("bottom");
    var b = document.getElementById("top");
    var d = document.getElementById("loading");
    TweenMax.to(a, 0.3 , {css: {opacity:"0"}, scale:1, delay: 0.5}, "+=0.4");
    TweenMax.to(b, 0.3 , {css: {opacity:"0"}, scale:1, delay: 0.5}, "+=0.4");
    TweenMax.to(a, 0 , {css: {height:"0"}, scale:1, delay: 0.8}, "+=0.4");
    TweenMax.to(b, 0 , {css: {height:"0"}, scale:1, delay: 0.8}, "+=0.4");
    TweenMax.to(d, 1 , {css: {opacity:"1"}, scale:1, delay: 1});
  };

  /*-----------------------------------------------------------------------------------*/
  /*	ScrollReveal
  /*-----------------------------------------------------------------------------------*/
  var srReveal = {
  easing   : 'ease-in-out',
  scale    : 1,
  viewFactor: 0.25,
  reset: false
  };

  var boxReveal = {
  easing   : 'ease-in-out',
  scale    : 1,
  viewFactor: 0.25,
  reset: false,
  mobile: false
  };

  window.sr = ScrollReveal();
  sr.reveal('.sr', srReveal);
  sr.reveal('.box', boxReveal);

  /*-----------------------------------------------------------------------------------*/
  /*	Init
  /*-----------------------------------------------------------------------------------*/
  retinajs();



})(jQuery);
