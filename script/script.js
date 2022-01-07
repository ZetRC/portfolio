$(document).ready(function(){

    var initAutoscroll=(()=>{
      
      const scrollTime=800
  
      $(".home-selector").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("html").offset().top
        }, scrollTime);
      });
  
      $("#aboutButton").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#aboutSection").offset().top
        }, scrollTime);
      });
  
      $("#portfolioButton").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#portfolioSection").offset().top
        }, scrollTime);
      });
  
      $(".contact-button").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contactSection").offset().top
        }, scrollTime);
      });
    })
    

    var slideBarToggler=(()=>{
      
      $("#slidebar-btn").on("click",function(){
        /* $("#navbar-cont").animate({width:'toggle'},350); */
        $("#navbar-cont").fadeToggle(300)
      })
  
      $("#homeButton , #aboutButton , #portfolioButton , #contactButton").click(function(){
        $("#navbar-cont").toggle()
      })
    })

    const hoverSection = (()=>{
      $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
      };

      $(window).on('resize scroll load', function() {
        if ($('#homeSection').isInViewport()) {
          $("#navbar").find(".active-selector").removeClass("active-selector");
          $("#homeButton").addClass("active-selector")
        }
        if ($('#aboutContent').isInViewport()) {
          $("#navbar").find(".active-selector").removeClass("active-selector");
          $("#aboutButton").addClass("active-selector")
        }
        if ($('#portfolioContent').isInViewport()) {
          $("#navbar").find(".active-selector").removeClass("active-selector");
          $("#portfolioButton").addClass("active-selector")
        }
        if ($('#contactContent').isInViewport()) {
          $("#navbar").find(".active-selector").removeClass("active-selector");
          $("#contactButton").addClass("active-selector")
        }
      });
  
    })

    var ifViewportNotOnTop = function(){
      $(window).scroll(function (event) {
        /* $(window).on("scroll ready",function (event) { */
        var scroll = $(window).scrollTop();
        if(scroll > 0 ){
          $("#up-btn").fadeIn()
          $("#navbar").addClass("smaller-nav")
        }
        if(scroll == 0){
          $("#up-btn").fadeOut()
          $("#navbar").removeClass("smaller-nav")
        }
      });

      $("#up-btn").click(function(){
        $([document.documentElement, document.body]).animate({
          scrollTop: $("html").offset().top
        }, 500);
      })

    }

    var createTimeline = function(){
      window.sr = ScrollReveal();

      if ($(window).width() < 768) {

        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
          $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }

        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 800,
        });

      } else {
  	
      sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });

      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });

  }
  
    sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });
    }

    var downloadCV = function(){
      $("#cv-selector").click(function(){
        window.open('./CV.pdf');
      })
    }

    var initSkillbars = function(){
      jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
          width:jQuery(this).attr('data-percent')
        },2000);
      });
    }

    slideBarToggler()
    initAutoscroll()
    hoverSection()
    ifViewportNotOnTop()
    createTimeline()
    downloadCV()
    initSkillbars()
  });
