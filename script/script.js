$(document).ready(function(){

    var initAutoscroll=(()=>{
      
      const scrollTime=800
  
      $("#homeButton").click(function() {
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
  
      $("#contactButton").click(function() {
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
        //runs animation on contact icon when it is visible in viewport
        /* if ($('#msgIcon').isInViewport()) {
          setTimeout(()=>{
            const rotateValue = "360deg"
            $('#msgIcon').css({
              '-webkit-transform' : 'rotateY(' + rotateValue + ')',
              '-moz-transform'    : 'rotateY(' + rotateValue + ')',
              '-ms-transform'     : 'rotateY(' + rotateValue + ')',
              '-o-transform'      : 'rotateY(' + rotateValue + ')',
              'transform'         : 'rotateY(' + rotateValue + ')'
            });
          },300)
        } */
        
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

    slideBarToggler()
    initAutoscroll()
    hoverSection()
    ifViewportNotOnTop()
  });
