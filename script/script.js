
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
        /* $("#navbar-cont").slideToggle() */
        $("#navbar-cont").animate({width:'toggle'},350);
        /* $('#navbar-cont').toggle({ direction: "left" }, 1000); */


      })
  
      $("#homeButton , #aboutButton , #portfolioButton , #contactButton").click(function(){
        $("#navbar-cont").toggle()
      })
    })

    var initProjectSlider=(()=>{
      let projects=[{
        name:'<a href="https://zetrc.github.io/recipes-app/" target="_blank" rel="noopener noreferrer">ReciPie</a>',
        image:'<img src="./images/recipieCover.webp" alt="">',
        description:"With ReciPie you will find endless and delicious recipes",
        categories:'<div><i class="fab fa-react"></i>React js</div><div><i class="fas fa-palette"></i>Web design</div><div><i class="fas fa-plug"></i>API integration</div>'
      },
      {
        name:'<a href="https://zetrc.github.io/ZYA/" target="_blank" rel="noopener noreferrer">ZYA</a>',
        image:'<img src="./images/zyaCover.webp" alt="">',
        description:"Check out this online store where you cand find all kind of products",
        categories:'<div><i class="fas fa-cog"></i>dinamic content</div><div><i class="fas fa-palette"></i>Web design</div><div><i class="fas fa-plug"></i>API integration</div>'
      },
      {
        name:'<a href="https://zetrc.github.io/re-test/" target="_blank" rel="noopener noreferrer">Rs page </a>',
        image:'<img src="./images/rstest.webp" alt="">',
        description:"Just a nice and simple template for real state purposes",
        categories:'<div><i class="fas fa-cog"></i>dinamic content</div><div><i class="fas fa-palette"></i>Web design</div><div><i class="fas fa-border-all"></i>template material</div>'
      },
      {
        name:'<a href="https://zetrc.github.io/online_galery/" target="_blank" rel="noopener noreferrer">FWCOM</a>',
        image:'<img src="./images/fwcom-preview.webp" alt="">',
        description:"This online galery will allow you to watch beautiful and endless images.",
        categories:'<div><i class="fas fa-cog"></i>dinamic content</div><div><i class="fas fa-palette"></i>Web design</div><div><i class="fas fa-plug"></i>API integration</div>'
      }/* ,
      {
        name:'<a href="https://zetrc.github.io/weather_app/" target="_blank" rel="noopener noreferrer">WEAP</a>',
        image:'<img src="./images/weapCover.png" alt="">',
        description:"With this app you will be able to find out the weather in any location you want...and some other related data",
        categories:'<div><i class="fas fa-cog"></i>dinamic content</div><div><i class="fas fa-palette"></i>Web design</div><div><i class="fas fa-plug"></i>API integration</div>'
      },{
        name:'<a href="https://zetrc.github.io/stopwatch/" target="_blank" rel="noopener noreferrer">Timeria</a>',
        image:'<img src="./images/timeriaCover.png" alt="">',
        description:"In this site you will be able to use a really usefull stopwatch",
        categories:'<div><i class="fas fa-cog"></i>dinamic content</div><div><i class="fas fa-palette"></i>Web design</div><div><i class="fab fa-js"></i>javascript app</div>'
      } */
    ]
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
        if ($('#msgIcon').isInViewport()) {
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
        }
        
      });
  
    })

    initProjectSlider()
    initCarousel()
    slideBarToggler()
    initAutoscroll()
    hoverSection()
  });
