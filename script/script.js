
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
      let projects=[{
        name:'<a href="https://zetrc.github.io/ZYA/" target="_blank" rel="noopener noreferrer">ZYA</a>',
        image:'<img src="./images/zyaCover.webp" alt="">',
        description:"Check out this online store where you cand find all sort of stuff",
        categories:'<div><i class="fas fa-cog"></i>dinamic content</div><div><i class="fas fa-palette"></i>Web design</div><div><i class="fas fa-plug"></i>API integration</div>'
      },
      {
        name:'<a href="https://zetrc.github.io/online_galery/" target="_blank" rel="noopener noreferrer">FWCOM</a>',
        image:'<img src="./images/fwcom-preview.webp" alt="">',
        description:"This online galery will allow you to watch really cool and endless images.",
        categories:'<div><i class="fas fa-cog"></i>dinamic content</div><div><i class="fas fa-palette"></i>Web design</div><div><i class="fas fa-plug"></i>API integration</div>'
      },
      {
        name:'<a href="https://zetrc.github.io/weather_app/" target="_blank" rel="noopener noreferrer">WEAP</a>',
        image:'<img src="./images/weapCover.png" alt="">',
        description:"With this app you will be able to find out the weather in any location you want...and some other data as well",
        categories:'<div><i class="fas fa-cog"></i>dinamic content</div><div><i class="fas fa-palette"></i>Web design</div><div><i class="fas fa-plug"></i>API integration</div>'
      },{
        name:'<a href="https://zetrc.github.io/stopwatch/" target="_blank" rel="noopener noreferrer">Timeria</a>',
        image:'<img src="./images/timeriaCover.png" alt="">',
        description:"You will be able to use a really usefull stopwatch here",
        categories:'<div><i class="fas fa-cog"></i>dinamic content</div><div><i class="fas fa-palette"></i>Web design</div><div><i class="fas fa-plug"></i>javascript app</div>'
      }]
      let i=0
      const projectsNumber=projects.length-1
      $("#nextProject-btn").click(function(){
        i++
        if(i>projectsNumber){
          i=0
        }
        changeContent()
      })
      
      $("#prevProject-btn").click(function(){
        i--
        if(i<0){
          i=projectsNumber
        }
        changeContent()
      })

      let changeContent=(()=>{
        $(".projectName , #projectDescription , #projectCategories , #projectImage").fadeOut(300);
        setTimeout(function(){
          $("#projectImage").html(projects[i].image); 
           $("#projectName").html(projects[i].name); 
           $("#projectDescription").html(projects[i].description); 
           $("#projectCategories").html(projects[i].categories); 
          }, 300);        
          $(".projectName , #projectDescription , #projectCategories , #projectImage").fadeIn(300)
      })
    })


    initProjectSlider()
    initCarousel()
    slideBarToggler()
    initAutoscroll()
  });
