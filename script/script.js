
$(document).ready(function(){
  //initCarousel
    $('.portfolioContent').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });

    //initAutoscroll

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
    

    //init slidebar


    $("#slidebar-btn").on("click",function(){
      $("#navbar-cont").slideToggle()
    })

    $("#homeButton , #aboutButton , #portfolioButton , #contactButton").click(function(){
      $("#navbar-cont").toggle()
    })
  });
