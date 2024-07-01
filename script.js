window.onload = () => {
  
  navHandler();
  
  
  };
  window.onscroll = () => {stickyNav();};
  
  
  function stickyNav() {
    let navbar = document.getElementById("header");
    let sticky = navbar.offsetTop;
    window.pageYOffset > sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
  }
  function navHandler() {
    let navBar = document.querySelectorAll(".nav-link");
    navBar.forEach(nav => {
      nav.addEventListener("click", () => {
        !nav.classList.contains("current") && nav.classList.add('current');
        let current = nav.innerHTML;
        navBar.forEach(nav => {nav.innerHTML != current && nav.classList.remove('current');});
      });
    });
  }
  
  

document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function() {
    const flipInner = this.querySelector('.flip-card-inner');
    flipInner.classList.toggle('is-flipped');
  });
});

// Papulates the journey section with external text data from journey.txt 
let journeyDestinations = $("#thejourney").find("div");
journeyDestinations.each(function() {
    $(`#${this.id}`).load(`journey.txt div[title~=${this.id}]`);
});
	console.log($(`#educationPlatforms`));
    $(`#educationPlatforms`).load(`blockquotes.txt blockquote[title~=educationPlatforms]`);

