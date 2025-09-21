import { showOrHideUpButton } from "../utils/show-or-hide-up-button/show-or-hide-up-button.js";
import { smoothScroll } from "../utils/smooth-scroll/smooth-scroll.js";
import { showNavigationSubmenu } from "../utils/show-navigation-submenu/show-navigation-submenu.js";
import { burgerMenu } from "../utils/burger-menu/burger-menu.js";
const header = document.getElementById("header-id");
// burger menu
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
// bid-form
function bidFormRadioState(radioBlock) {
  const radioProposal = radioBlock.querySelectorAll(".bid-form__radio-text");
  for (let i = 0; i < radioProposal.length; i++) {
    radioProposal[i].onclick = () => {
      for (let j = 0; j < radioProposal.length; j++) {
        const circleRadio = radioProposal[j].querySelector(
          ".bid-form__input_radio-span"
        );
        circleRadio.classList.remove("bid-form__input_radio-span-active");
      }
      const currentCircleRadio = radioProposal[i].querySelector(
        ".bid-form__input_radio-span"
      );
      currentCircleRadio.classList.add("bid-form__input_radio-span-active");
    };
  }
}
const bidForm = document.getElementById("bid-form-id");
const radioProposalInner = bidForm.querySelector(
  ".bid-form__radio-inner-proposal"
);
const radioDeliveryInner = bidForm.querySelector(
  ".bid-form__radio-inner-delivery"
);
bidFormRadioState(radioProposalInner);
bidFormRadioState(radioDeliveryInner);
// scroll button up
window.addEventListener("scroll", showOrHideUpButton);
// smooth scroll
document.addEventListener("click", smoothScroll);
