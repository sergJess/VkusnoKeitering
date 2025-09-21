// show burger menu
export function burgerMenu() {
  const header = document.getElementById("header-id");
  const burger = header.querySelector(".navigation-burger");
  burger.onclick = () => {
    const mobileMenu = header.querySelector(".header__block-nav");
    mobileMenu.classList.add("header__block-nav_open");
  };
  const cross = header.querySelector(".navigation-cross__click");
  cross.onclick = () => {
    const mobileMenu = header.querySelector(".header__block-nav");
    mobileMenu.classList.remove("header__block-nav_open");
  };
}
