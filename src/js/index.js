import { smoothScroll } from "./utils/smooth-scroll/smooth-scroll.js";
import { moveSliderFood } from "./utils/slider/move-slider.js";
import {
  setSliderTransition,
  sliderTransitionStart,
  sliderTransitionEnd,
} from "./utils/slider/slider-transition.js";
import {
  setPopUpForSliderPopUp,
  closeSliderPopup,
} from "./utils/slider/slider-popup.js";
import { sliderFoodExampleInit } from "./utils/slider/food-slider-init.js";
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
// scroll button up
function showOrHideUpButton() {
  const buttonUp = this.document.getElementById("up-button-id");
  if (this.window.scrollY > 500) {
    buttonUp.classList.add("up-button_show");
  } else {
    buttonUp.classList.remove("up-button_show");
  }
}
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
for (let i = 0, length = portfolioSlides.length; i < length; i++) {
  portfolioSlides[i].setAttribute("data-slide-index", i);
}

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
// onload event
window.onload = function () {
  sliderFoodExampleInit({
    sliderTrack: foodExampleSliderInner,
    sliderItemClass: "food-example-goods__item",
    tryMaxSlidesPerView: 5,
    sliderArrowsInnerClass: "food-example__slider-arrow-inner",
    sliderArrowsInnerClassInactive: "food-example__slider-arrow-inner_inactive",
    leftArrow: foodExampleArrowLeft,
    mobileGridWindowWidth: 860,
  });
  setTimeout(() => {
    setSliderTransition(foodExampleSliderInner, "food-example-goods__slider");
  }, 10);

  foodExampleArrowLeft.addEventListener(
    "click",
    moveSliderFood.bind(null, foodExampleSliderInner, foodExampleSliderItem, -1)
  );
  foodExampleArrowRight.addEventListener(
    "click",
    moveSliderFood.bind(null, foodExampleSliderInner, foodExampleSliderItem, 1)
  );
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
    sliderTrackClassTransition: "food-example-goods__slider",
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
  const sliderPopUpCrossClick = closeSliderPopup.bind(null, {
    popUpSliderContentBlock: sliderPopUpBlockContent,
    popUpSlider: sliderPopUp,
    classPopUpSliderOpen: "food-example-slider__popup_opened",
    classSliderTrackPopUpTransition: "food-example-goods__slider",
  });
  const porrfolioSliderPopUpCrossClick = closeSliderPopup.bind(null, {
    popUpSliderContentBlock: portfolioSliderPopUpBlockContent,
    popUpSlider: portfolioPopUpBlock,
    classPopUpSliderOpen: "porfolio__examples-slider__popup_opened",
    classSliderTrackPopUpTransition: "porfolio__examples__slider",
  });
  sliderPopUpCross.addEventListener("click", sliderPopUpCrossClick);
  portfoliosSliderPopUpCross.addEventListener(
    "click",
    porrfolioSliderPopUpCrossClick
  );
  document.addEventListener("click", smoothScroll);
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
    popupItemClassRemove: "food-example-goods__item_pointer",
    popupItemsInfoArray: [
      {
        elementQuerySelector: ".porfolio__examples-item-img",
        elementClassAdd: "porfolio__examples__item-img_popup",
      },
    ],
  });
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
    popupSliderTrackClassTransition: "food-example-goods__slider",
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
