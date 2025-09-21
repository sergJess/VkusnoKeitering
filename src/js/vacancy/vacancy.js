import { showOrHideUpButton } from "../utils/show-or-hide-up-button/show-or-hide-up-button.js";
import { smoothScroll } from "../utils/smooth-scroll/smooth-scroll.js";
import { showNavigationSubmenu } from "../utils/show-navigation-submenu/show-navigation-submenu.js";
import { burgerMenu } from "../utils/burger-menu/burger-menu.js";
const header = document.getElementById("header-id");
//burger menu
burgerMenu();
//order-call-form
const orderCallButtons = header.querySelectorAll(".order-call-button_btn");
const crossOrderCallForm = document.getElementById("order-call-form-cross-id");
const orderCallForm = document.getElementById("order-call-form-block-id");
crossOrderCallForm.onclick = () => {
  orderCallForm.classList.remove("order-call-form-block_show");
};
for (let i = 0, length = orderCallButtons.length; i < length; i++) {
  orderCallButtons[i].onclick = () => {
    orderCallForm.classList.add("order-call-form-block_show");
  };
}
// navigation show submenu
showNavigationSubmenu();
// order
const vacancyList = document.getElementById("vacancy-id");
const buttonsResumeOrders = vacancyList.querySelectorAll(".vacancy__button");
const resumeForm = document.getElementById("form-resume-inner-id");
const resumeFormCross = resumeForm.querySelector(".form-resume__cross");
for (let i = 0; i < buttonsResumeOrders.length; i++) {
  buttonsResumeOrders[i].onclick = () => {
    resumeForm.classList.add("form-resume__opened");
  };
}
resumeFormCross.onclick = () => {
  resumeForm.classList.remove("form-resume__opened");
};
// scroll button up
window.addEventListener("scroll", showOrHideUpButton);
// smooth scroll
document.addEventListener("click", smoothScroll);
