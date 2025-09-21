import { setReadyMadeSolutionsLinearGradient } from "../utils/set-ready-made-solutions-linear-gradient/set-ready-made-solutions-linear-gradient.js";
import { showOrHideUpButton } from "../utils/show-or-hide-up-button/show-or-hide-up-button.js";
import { smoothScroll } from "../utils/smooth-scroll/smooth-scroll.js";
import { moveSliderFood } from "../utils/slider/move-slider.js";
import {
  sliderTransitionStart,
  sliderTransitionEnd,
} from "../utils/slider/slider-transition.js";
import {
  setPopUpForSliderPopUp,
  closeSliderPopup,
} from "../utils/slider/slider-popup.js";
import {
  sliderFoodExampleInit,
  setDefaultAttributeSlideIndex,
} from "../utils/slider/food-slider-init.js";
const header = document.getElementById("header-id");
//menu
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
const navigation = document.getElementById("navigation-id");
const navigationLists = navigation.querySelectorAll(
  ".navigation-show__submenu"
);
for (let i = 0, length = navigationLists.length; i < length; i++) {
  navigationLists[i].onclick = () => {
    const navigationSubmenu = navigation.querySelectorAll(
      ".navigation__submenu"
    );
    const submenu = navigationLists[i].querySelector(".navigation__submenu");
    const isHaveActiveClass = submenu.classList.contains(
      "navigation__submenu_show"
    );
    for (let j = 0; j < navigationSubmenu.length; j++) {
      navigationSubmenu[j].classList.remove("navigation__submenu_show");
    }
    if (!isHaveActiveClass) submenu.classList.add("navigation__submenu_show");
  };
}
//height in ready made solutions block linear-gradient
const readyMeadeSolutionsBlock = document.getElementById(
  "ready-made-solutions-id"
);
const readyMadeSolutionsContent = readyMeadeSolutionsBlock.querySelector(
  ".ready-made-solutions__content"
);
// scroll button up
window.addEventListener("scroll", showOrHideUpButton);
// smooth scroll
document.addEventListener("click", smoothScroll);
// food-and-cost slider
const foodAndCostBlock = document.getElementById("food-and-cost-id");
const foodAndCostSlider = foodAndCostBlock.querySelector(
  ".food-and-cost__slider"
);
const foodAndCostSliderInner = foodAndCostBlock.querySelector(
  ".food-and-cost-goods"
);
const foodAndCostSliderItem = foodAndCostSliderInner.querySelector(
  ".food-and-cost-goods__item"
);
const foodAndCostArrowLeft = foodAndCostBlock.querySelector(
  ".food-and-cost__slider-button-prev"
);
const foodAndCostArrowRight = foodAndCostBlock.querySelector(
  ".food-and-cost__slider-button-next"
);
//slider popup food example
const foodAndCostSliderPopUp = document.getElementById(
  "food-and-cost-slider__popup-id"
);
const foodAndCostSliderPopUpCross = foodAndCostSliderPopUp.querySelector(
  ".food-and-cost-popup__close-img"
);
const foodAndCostSliderPopUpBlockContent = foodAndCostSliderPopUp.querySelector(
  ".food-and-cost-slider__popup-block-content"
);
const foodAndCostSliderPopUpContentInner = foodAndCostSliderPopUp.querySelector(
  ".food-and-cost-slider__popup-content-inner"
);
const foodAndCostSliderPopUpArrowLeft = foodAndCostSliderPopUp.querySelector(
  ".food-and-cost__popup-slider-arrow-left"
);
const foodAndCostSliderPopUpArrowRight = foodAndCostSliderPopUp.querySelector(
  ".food-and-cost__popup-slider-arrow-right"
);
window.onload = function () {
  setReadyMadeSolutionsLinearGradient(readyMadeSolutionsContent, "#423329");
};
