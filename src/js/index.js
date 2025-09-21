import { smoothScroll } from "./utils/smooth-scroll/smooth-scroll.js";
import { moveSliderFood } from "./utils/slider/move-slider.js";
import {
  sliderTransitionStart,
  sliderTransitionEnd,
} from "./utils/slider/slider-transition.js";
import {
  setPopUpForSliderPopUp,
  closeSliderPopup,
} from "./utils/slider/slider-popup.js";
import {
  sliderFoodExampleInit,
  setDefaultAttributeSlideIndex,
} from "./utils/slider/food-slider-init.js";
import { showOrHideUpButton } from "./utils/show-or-hide-up-button/show-or-hide-up-button.js";
import { showNavigationSubmenu } from "./utils/show-navigation-submenu/show-navigation-submenu.js";
import { burgerMenu } from "./utils/burger-menu/burger-menu.js";
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
//food-example tabs
const foodExampleTabsSliderInner = document.getElementById(
  "food-example-tabs-id"
);
const foodExampleTabsSlider =
  foodExampleTabsSliderInner.querySelectorAll(".food-example__tab");
for (let i = 0, length = foodExampleTabsSlider.length; i < length; i++) {
  foodExampleTabsSlider[i].onclick = () => {
    if (foodExampleTabsSlider[i].classList.contains("food-example__tab_active"))
      return;
    else {
      for (let j = 0, length = foodExampleTabsSlider.length; j < length; j++) {
        foodExampleTabsSlider[j].classList.remove("food-example__tab_active");
      }
      foodExampleTabsSlider[i].classList.add("food-example__tab_active");
    }
  };
}
window.addEventListener("scroll", showOrHideUpButton);
// porfolio scroll
const portfolio = document.getElementById("portfolio-id");
const portfolioSlides = portfolio.querySelectorAll(
  ".porfolio__examples-item-slide"
);
// porfolioPopUpCrossClose.addEventListener("click");
setDefaultAttributeSlideIndex(portfolioSlides);
const porfolioExamples = portfolio.querySelector(".porfolio__examples");
porfolioExamples.setAttribute("data-all-slides", `${portfolioSlides.length}`);
const porfolioLeftArrow = portfolio.querySelector(
  ".portfolio-examples__slider-button-prev"
);
const porfolioRightArrow = portfolio.querySelector(
  ".portfolio-examples__slider-button-next"
);
porfolioLeftArrow.onclick = () => {
  porfolioExamples.scrollBy({ top: 0, left: -350, behavior: "smooth" });
};
porfolioRightArrow.onclick = () => {
  porfolioExamples.scrollBy({ top: 0, left: 350, behavior: "smooth" });
};
//portfolio popup
const portfolioPopUpBlock = document.getElementById(
  "porfolio__examples-slider__popup-id"
);
const portfolioSliderPopUpBlockContent = portfolioPopUpBlock.querySelector(
  ".porfolio__examples-slider__popup-block-content"
);
const portfolioSliderPopUpContentInner = portfolioPopUpBlock.querySelector(
  ".porfolio__examples-slider__popup-content-inner"
);
const portfolioPopUpArrowLeft = portfolioPopUpBlock.querySelector(
  ".porfolio__examples__popup-slider-arrow-left"
);
const portfolioPopUpArrowRight = portfolioPopUpBlock.querySelector(
  ".porfolio__examples__popup-slider-arrow-right"
);
const portfoliosSliderPopUpCross = portfolioPopUpBlock.querySelector(
  ".porfolio__examples-popup__close-img"
);
// food-example slider
const foodExampleBlock = document.getElementById("food-example-id");
const foodExampleSlider = foodExampleBlock.querySelector(
  ".food-example__slider"
);
const foodExampleSliderInner = foodExampleBlock.querySelector(
  ".food-example-goods"
);
const foodExampleSliderItem = foodExampleSliderInner.querySelector(
  ".food-example-goods__item"
);
const foodExampleArrowLeft = foodExampleBlock.querySelector(
  ".food-example__slider-button-prev"
);
const foodExampleArrowRight = foodExampleBlock.querySelector(
  ".food-example__slider-button-next"
);
//slider popup food example
const sliderPopUp = document.getElementById("food-example-slider__popup-id");
const sliderPopUpCross = sliderPopUp.querySelector(
  ".food-example-popup__close-img"
);
const sliderPopUpBlockContent = sliderPopUp.querySelector(
  ".food-example-slider__popup-block-content"
);
const sliderPopUpContentInner = sliderPopUp.querySelector(
  ".food-example-slider__popup-content-inner"
);
const sliderPopUpArrowLeft = sliderPopUp.querySelector(
  ".food-example__popup-slider-arrow-left"
);
const sliderPopUpArrowRight = sliderPopUp.querySelector(
  ".food-example__popup-slider-arrow-right"
);
// smooth scroll
document.addEventListener("click", smoothScroll);
// onload event
window.onload = function () {
  // set up slider food example
  sliderFoodExampleInit({
    sliderTrack: foodExampleSliderInner,
    sliderItemClass: "food-example-goods__item",
    tryMaxSlidesPerView: 5,
    sliderArrowsInnerClass: "food-example__slider-arrow-inner",
    sliderArrowsInnerClassInactive: "food-example__slider-arrow-inner_inactive",
    leftArrow: foodExampleArrowLeft,
    mobileGridWindowWidth: 860,
    sliderTransitionClass: "food-example-goods__slider-transition",
  });
  const foodExampleArrowLeftClick = moveSliderFood.bind(
    null,
    foodExampleSliderInner,
    foodExampleSliderItem,
    -1
  );
  foodExampleArrowLeft.addEventListener("click", foodExampleArrowLeftClick);
  const foodExampleArrowRightClick = moveSliderFood.bind(
    null,
    foodExampleSliderInner,
    foodExampleSliderItem,
    1
  );
  foodExampleArrowRight.addEventListener("click", foodExampleArrowRightClick);
  const foodExampleSliderInnerTransitionStart = sliderTransitionStart.bind(
    null,
    foodExampleSliderInner
  );
  foodExampleSliderInner.addEventListener(
    "transitionstart",
    foodExampleSliderInnerTransitionStart
  );
  const foodExampleSliderInnerTransitionEnd = sliderTransitionEnd.bind(null, {
    sliderItem: foodExampleSliderItem,
    sliderTrack: foodExampleSliderInner,
    arrowLeft: foodExampleArrowLeft,
    arrowRight: foodExampleArrowRight,
    arrowClassInactive: "food-example__slider-arrow-inner_inactive",
    sliderTrackClassTransition: "food-example-goods__slider-transition",
  });
  foodExampleSliderInner.addEventListener(
    "transitionend",
    foodExampleSliderInnerTransitionEnd
  );
  foodExampleSlider.addEventListener("touchstart", function (e) {
    const node = this;
    if (node) {
      node.setAttribute("sliderPopUpSwipeClientX", `${e.touches[0].clientX}`);
    }
  });
  // food example slider swipe
  foodExampleSlider.addEventListener("touchend", function (e) {
    const node = this;
    if (node && node.hasAttribute("sliderPopUpSwipeClientX")) {
      const endX = e.changedTouches[0].clientX;
      const threshold = 10;
      const deltaX =
        endX - parseInt(node.getAttribute("sliderPopUpSwipeClientX"), 10);
      if (Math.abs(deltaX) > threshold) {
        const direction = deltaX > 0 ? -1 : 1;
        moveSliderFood(
          foodExampleSliderInner,
          foodExampleSliderItem,
          direction
        );
      }
    }
  });
  // click on cross slider food example slider popup to close
  const sliderPopUpCrossClick = closeSliderPopup.bind(null, {
    popUpSliderContentBlock: sliderPopUpBlockContent,
    popUpSlider: sliderPopUp,
    classPopUpSliderOpen: "food-example-slider__popup_opened",
    classSliderTrackPopUpTransition: "food-example-goods__slider-transition",
  });
  // click on cross slider porfolio slider popup to close
  const portfolioSliderPopUpCrossClick = closeSliderPopup.bind(null, {
    popUpSliderContentBlock: portfolioSliderPopUpBlockContent,
    popUpSlider: portfolioPopUpBlock,
    classPopUpSliderOpen: "porfolio__examples-slider__popup_opened",
    classSliderTrackPopUpTransition: "porfolio__examples__slider",
  });
  sliderPopUpCross.addEventListener("click", sliderPopUpCrossClick);
  portfoliosSliderPopUpCross.addEventListener(
    "click",
    portfolioSliderPopUpCrossClick
  );
  // set up slidr popup portfolio
  setPopUpForSliderPopUp({
    popup: portfolioPopUpBlock,
    sliderBlockContent: portfolioSliderPopUpBlockContent,
    slider: portfolioSliderPopUpContentInner,
    sliderTrack: porfolioExamples,
    tryMaxSlidesPerView: 1,
    slidesPopupClass: "porfolio__examples-item-slide",
    popUpSliderTrackParentClass:
      "porfolio__examples-slider__popup-content-inner",
    popUpSliderTrackClass: "porfolio__examples-slider__popup-content",
    classToSelectOriginSlides: "porfolio__examples-item-slide",
    popupClassOpen: "porfolio__examples-slider__popup_opened",
    contentItemClass: "porfolio__examples__item_popup",
    sliderArrowsInnerClass: "porfolio__examples__popup-slider-arrow-block",
    arrowLeft: portfolioPopUpArrowLeft,
    arrowRight: portfolioPopUpArrowRight,
    sliderArrowsInnerClassInactive:
      "porfolio__examples__slider-arrow-inner_inactive",
    dataAttributeForSearchSlidesWithoutClones: "data-slide-index",
    dataAttributeAllSlidesWithoutClones: "data-all-slides",
    popupSliderTrackClassTransition: "porfolio__examples__slider",
    // string or array of strings
    popupItemClassRemove: [
      "porfolio__examples-item_up",
      "porfolio__examples-item_pointer",
      "porfolio__examples-item-1",
      "porfolio__examples-item-2",
      "porfolio__examples-item-3",
      "porfolio__examples-item-4",
      "porfolio__examples-item-5",
      "porfolio__examples-item-6",
      "porfolio__examples-item-7",
      "porfolio__examples-item-8",
      "porfolio__examples-item-9",
    ],
    popupItemsInfoArray: [
      {
        elementQuerySelector: ".porfolio__examples-item-img",
        // string or array of strings
        elementClassAdd: "porfolio__examples__item-img_popup",
        elementClassRemove: "porfolio__examples-item-img",
      },
    ],
  });
  // set up slider popup for food example
  setPopUpForSliderPopUp({
    popup: sliderPopUp,
    sliderBlockContent: sliderPopUpBlockContent,
    slider: sliderPopUpContentInner,
    sliderTrack: foodExampleSliderInner,
    tryMaxSlidesPerView: 1,
    slidesPopupClass: "food-example-goods__item",
    popUpSliderTrackParentClass: "food-example-slider__popup-content-inner",
    popUpSliderTrackClass: "food-example-slider__popup-content",
    classToSelectOriginSlides: "food-example-goods__item",
    popupClassOpen: "food-example-slider__popup_opened",
    contentItemClass: "food-example-goods__item_popup",
    sliderArrowsInnerClass: "food-example__popup-slider-arrow-block",
    arrowLeft: sliderPopUpArrowLeft,
    arrowRight: sliderPopUpArrowRight,
    sliderArrowsInnerClassInactive: "food-example__slider-arrow-inner_inactive",
    dataAttributeForSearchSlidesWithoutClones: "data-slide-index",
    dataAttributeAllSlidesWithoutClones: "data-all-slides",
    popupSliderTrackClassTransition: "food-example-goods__slider-transition",
    popupItemClassRemove: "food-example-goods__item_pointer",
    popupItemsInfoArray: [
      {
        elementQuerySelector: ".food-example-goods__item-img",
        elementClassAdd: "food-example-goods__item-img_popup",
      },
      {
        elementQuerySelector: ".food-example__item-title",
        elementClassRemove: "food-example__item-title",
        elementClassAdd: "food-example__popup-slider-item-title",
      },
      {
        elementQuerySelector: ".food-example__item-count",
        elementClassRemove: "text-base",
        elementClassAdd: "food-example__popup-slider-item-count",
      },
      {
        elementQuerySelector: ".food-example__item-price",
        elementClassRemove: "text-item-writing",
        elementClassAdd: "food-example__popup-slider-item-count",
      },
    ],
  });
};
