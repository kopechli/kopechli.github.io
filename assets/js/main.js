    //------------------------------  GLOBALS  -------------------------------
    var attributes = document.getElementsByClassName("attributes");
    var core = document.getElementsByClassName("core");
    var check_area = document.getElementsByClassName("check-area");
    var welcom = document.getElementById('welcom');
    var fealds = document.getElementById('fieldsets');
    var cardWelcom = document.getElementById('welcome-section');
    var card = document.getElementsByClassName("card");
    //-------------------------------------------------------------------------
    
    
    
    
    //--------------------------------  Menu { ---------------------------------------
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("main").style.marginLeft = "100%";
        }
        function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        }
        //--------------------------------  Menu }  --------------------------------------
    
        //------------------------------ About Slides {  ---------------------------------
        var slideIndex = 1;
        showSlides(slideIndex);
    
        function plusSlides(n) {
        showSlides(slideIndex += n);
        }
        function currentSlide(n) {
        showSlides(slideIndex = n);
        }
        function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        }
        //------------------------------ About Slides }  ---------------------------------
    
        //--------------------------------- Fieldsets mobile {  --------------------------
        window.onresize = ()=>{ 
             if( window.innerWidth < 1360){
                welcom.appendChild(fealds); 
            }
            if ( window.innerWidth < 860) {
               card[0].insertBefore(welcom,card[0].children[0]);
               //card[0].appendChild(welcom);
            }      
        }
        window.onload = () => {
            if( window.innerWidth < 1360){
                welcom.appendChild(fealds);
            }
            if ( window.innerWidth < 860) { 
               
                card[0].insertBefore(welcom,card[0].children[0]);
            }
            navHandler();
            expand();
          };
        //--------------------------------- Fieldsets mobile }  ---------------------------
     
    
        //----------------------------------------- To Top Button { -----------------------
        //Get the button
        var mybutton = document.getElementById("myBtn");
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction(), stickyNav()};
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }
        //----------------------------------------- To Top Button } -----------------------
    
        //------------------------------------ Video { ------------------------------------
        var video = document.getElementById("myVideo");
        var btn = document.getElementById("myBtn");
        function myFunction() {
        if (video.paused) {
            video.play();
            btn.innerHTML = "Pause";
        } else {
            video.pause();
            btn.innerHTML = "Play";
        }
        }
        //------------------------------------ Video } ------------------------------------

       
        window.onscroll = function() {stickyNav()};
        function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        //if( scrolled > 5 ){console.log(scrolled)}
        document.getElementById("bar").style.height = scrolled + "%";
        }


        // let navBar = document.querySelectorAll(".nav-link");
        //   navBar.forEach((nav) => {
        //     nav.addEventListener("click",()=>{
        //         let targetID = nav.href.split("#");
        //        let targetElemnt = document.getElementById(targetID[1]);
        //        targetElemnt.style.display="none";
        //   });
        // });

        function stickyNav() {
            let navbar = document.getElementById("menu");
            let sticky = navbar.offsetTop;
            window.pageYOffset > sticky?navbar.classList.add("sticky"):navbar.classList.remove("sticky"); 
        }
        function navHandler(){
          let navBar = document.querySelectorAll(".nav-link");
          navBar.forEach((nav) => {
            nav.addEventListener("click",()=>{
              !nav.classList.contains("active-link")&&nav.classList.add('active-link');
              let current = nav.innerHTML;
              navBar.forEach((nav) => {nav.innerHTML != current&&nav.classList.remove('active-link')});
            });
          });
        }

        //   window.addEventListener('scroll', function isInViewPort(){
        //     let elem = document.querySelector('#timeLine').getBoundingClientRect();
        //     let center = window.innerHeight/2;
        //     let test = elem.height+(window.innerHeight/2);
        //     if(test >= elem.bottom && elem.top > 0){
        //         document.getElementById("welcom").style.display="none";
                
                   
        //     }else if(test <= elem.bottom){
        //         document.getElementById("welcom").style.display="block";
        //     }
           
            
        //   });


          function openPage(pageName,elmnt,color) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablink");
            for (i = 0; i < tablinks.length; i++) {
              tablinks[i].style.backgroundColor = "";
            }
            document.getElementById(pageName).style.display = "block";
            elmnt.style.backgroundColor = color;
          }
          document.getElementById("defaultOpen").click();
          
          function expand(){
            let buttons = document.querySelectorAll('.expandable'); 
            buttons.forEach((btn) => {
              btn.addEventListener("click",()=>{
                if(btn.innerHTML=="Contact"){
                  let el = document.getElementsByClassName('qr-container');
                  el[0].classList.toggle('hide');
                }
                if(btn.innerHTML=="About"){
                  let el = document.getElementsByClassName('cart-about');
                  let el1 = document.getElementsByClassName('slideshow-container');
                  let el2 = document.getElementsByClassName('dot-container');
                  el1[0].classList.toggle('show');
                  el2[0].classList.toggle('show');
                  el[0].classList.toggle('show');
                }
              });
            });
            
           
          }
      