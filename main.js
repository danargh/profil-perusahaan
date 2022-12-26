// FITUR HIDDEN NAVBAR
// variable
const navMenu = document.getElementById("navbar-menu"),
   navToggle = document.getElementById("navbar-toggle"),
   navClose = document.getElementById("navbar-close");
// show menu
if (navToggle) {
   navToggle.addEventListener("click", () => {
      navMenu.classList.add("show__menu");
   });
}
// hide menu
if (navClose) {
   navClose.addEventListener("click", () => {
      navMenu.classList.remove("show__menu");
   });
}
