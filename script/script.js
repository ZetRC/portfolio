
$(document).ready(function(){
  
    var initCarousel=(()=>{
        $('.portfolioContent').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1
        });
    
    })


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
        $("#navbar-cont").slideToggle()
      })
  
      $("#homeButton , #aboutButton , #portfolioButton , #contactButton").click(function(){
        $("#navbar-cont").toggle()
      })
    })

    var initProjectSlider=(()=>{
      let i=0
      if(i==-0){
        $("#project-prev").fadeToggle(200)
      }else if(i===1){
        console.log("hee hee")
      }else{
        console.log("yee yee ass haircut")
      }
      $("#nextProject-btn").click(function(){
        i++
        console.log(i)
        const projectsNumber=3
        if(i>projectsNumber){
          i=0
        }
      })
      
      $("#prevProject-btn").click(function(){
        i--
        console.log(i)
        const projectsNumber=3
        if(i<=0){
          i=projectsNumber
        }
      })
      
    })


    initProjectSlider()
    initCarousel()
    slideBarToggler()
    initAutoscroll()
  });
