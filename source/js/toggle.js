adaptiveMenu();

function adaptiveMenu() {
  var toggle = document.querySelector(".toggle");
  var nav = document.querySelector(".first-screen__nav");
  toggle.addEventListener("click", function(event){
      event.preventDefault();
      toggle.classList.toggle("toggle--close");
      nav.classList.toggle("main-nav__list--open");
  });
};
