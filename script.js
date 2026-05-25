const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


const burger = document.querySelector(".burger");
const navMenu = document.querySelector("nav ul");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

burger.addEventListener("click", () => {

  navMenu.classList.toggle("active");
  burger.classList.toggle("active");

});