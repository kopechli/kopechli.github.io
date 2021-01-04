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
         if ( window.innerWidth < 530) {
        var card = document.getElementsByClassName("card");          
        var attributes = document.getElementsByClassName("attributes");
        var core = document.getElementsByClassName("core");
        var check_area = document.getElementsByClassName("check-area");
        card[0].insertBefore(attributes[0],card[0].children[0]) ;
        card[0].insertBefore(core[0],card[0].children[1])  ;         
        card[0].insertBefore(check_area[0],card[0].children[2])  ;   
        }}
        //--------------------------------- Fieldsets mobile }  ---------------------------
     
    
        //----------------------------------------- To Top Button { -----------------------
        //Get the button
        var mybutton = document.getElementById("myBtn");
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
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