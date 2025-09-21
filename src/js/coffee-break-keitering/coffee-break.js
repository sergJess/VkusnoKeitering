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
  sliderFoodExampleInit({
    sliderTrack: foodAndCostSliderInner,
    sliderItemClass: "food-and-cost-goods__item",
    tryMaxSlidesPerView: 5,
    sliderArrowsInnerClass: "food-and-cost__slider-arrow-inner",
    sliderArrowsInnerClassInactive:
      "food-and-cost__slider-arrow-inner_inactive",
    leftArrow: foodAndCostArrowLeft,
    mobileGridWindowWidth: 860,
    sliderTransitionClass: "food-and-cost-goods__slider-transition",
  });
  const foodAndCostArrowLeftClick = moveSliderFood.bind(
    null,
    foodAndCostSliderInner,
    foodAndCostSliderItem,
    -1
  );
  foodAndCostArrowLeft.addEventListener("click", foodAndCostArrowLeftClick);
  const foodAndCostArrowRightClick = moveSliderFood.bind(
    null,
    foodAndCostSliderInner,
    foodAndCostSliderItem,
    1
  );
  foodAndCostArrowRight.addEventListener("click", foodAndCostArrowRightClick);
  const foodAndCostSliderInnerTransitionStart = sliderTransitionStart.bind(
    null,
    foodAndCostSliderInner
  );
  foodAndCostSliderInner.addEventListener(
    "transitionstart",
    foodAndCostSliderInnerTransitionStart
  );
  const foodAndCostSliderInnerTransitionEnd = sliderTransitionEnd.bind(null, {
    sliderItem: foodAndCostSliderItem,
    sliderTrack: foodAndCostSliderInner,
    arrowLeft: foodAndCostArrowLeft,
    arrowRight: foodAndCostArrowRight,
    arrowClassInactive: "food-and-cost__slider-arrow-inner_inactive",
    sliderTrackClassTransition: "food-and-cost-goods__slider-transition",
  });
  foodAndCostSliderInner.addEventListener(
    "transitionend",
    foodAndCostSliderInnerTransitionEnd
  );
  foodAndCostSlider.addEventListener("touchstart", function (e) {
    const node = this;
    if (node) {
      node.setAttribute("sliderPopUpSwipeClientX", `${e.touches[0].clientX}`);
    }
  });
  // food example slider swipe
  foodAndCostSlider.addEventListener("touchend", function (e) {
    const node = this;
    if (node && node.hasAttribute("sliderPopUpSwipeClientX")) {
      const endX = e.changedTouches[0].clientX;
      const threshold = 10;
      const deltaX =
        endX - parseInt(node.getAttribute("sliderPopUpSwipeClientX"), 10);
      if (Math.abs(deltaX) > threshold) {
        const direction = deltaX > 0 ? -1 : 1;
        moveSliderFood(
          foodAndCostSliderInner,
          foodAndCostSliderItem,
          direction
        );
      }
    }
  });
  // click on cross slider food and cost slider popup to close
  const sliderPopUpCrossClick = closeSliderPopup.bind(null, {
    popUpSliderContentBlock: foodAndCostSliderPopUpBlockContent,
    popUpSlider: foodAndCostSliderPopUp,
    classPopUpSliderOpen: "food-and-cost-slider__popup_opened",
    classSliderTrackPopUpTransition: "food-and-cost-goods__slider-transition",
  });
  foodAndCostSliderPopUpCross.addEventListener("click", sliderPopUpCrossClick);
  // set up slider popup for food and cost
  setPopUpForSliderPopUp({
    popup: foodAndCostSliderPopUp,
    sliderBlockContent: foodAndCostSliderPopUpBlockContent,
    slider: foodAndCostSliderPopUpContentInner,
    sliderTrack: foodAndCostSliderInner,
    tryMaxSlidesPerView: 1,
    slidesPopupClass: "food-and-cost-goods__item",
    popUpSliderTrackParentClass: "food-and-cost-slider__popup-content-inner",
    popUpSliderTrackClass: "food-and-cost-slider__popup-content",
    classToSelectOriginSlides: "food-and-cost-goods__item",
    popupClassOpen: "food-and-cost-slider__popup_opened",
    contentItemClass: "food-and-cost-goods__item_popup",
    sliderArrowsInnerClass: "food-and-cost-slider-arrow-block",
    arrowLeft: foodAndCostSliderPopUpArrowLeft,
    arrowRight: foodAndCostSliderPopUpArrowRight,
    sliderArrowsInnerClassInactive: "food-and-cost-arrow-inner_inactive",
    dataAttributeForSearchSlidesWithoutClones: "data-slide-index",
    dataAttributeAllSlidesWithoutClones: "data-all-slides",
    popupSliderTrackClassTransition: "food-and-cost-goods__slider-transition",
    popupItemClassRemove: "food-and-cost-goods__item_pointer",
    popupItemsInfoArray: [
      {
        elementQuerySelector: ".food-and-cost-goods__item-img",
        elementClassAdd: "food-and-cost-goods__item-img_popup",
      },
      {
        elementQuerySelector: ".food-and-cost__item-title",
        elementClassRemove: "food-and-cost__item-title",
        elementClassAdd: "food-and-cost__popup-slider-item-title",
      },
      {
        elementQuerySelector: ".food-and-cost__item-count",
        elementClassRemove: "text-base",
        elementClassAdd: "food-and-cost__popup-slider-item-count",
      },
      {
        elementQuerySelector: ".food-and-cost__item-price",
        elementClassRemove: "text-item-writing",
        elementClassAdd: "food-and-cost__popup-slider-item-count",
      },
    ],
  });
};
