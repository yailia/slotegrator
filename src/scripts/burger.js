const burger = document.querySelector(".js-burger");
const navMenu = document.querySelector(".js-nav-menu");


function handleClick() {
  burger.classList.toggle("header__burger_open")
  navMenu.classList.toggle("header__nav-menu_open")
}
export function toggleOpen() {
  burger.addEventListener("click", handleClick)
}