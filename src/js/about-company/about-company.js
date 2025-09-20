import { smoothScroll } from "../utils/smooth-scroll/smooth-scroll.js";
import { moveSliderFood } from "../utils/slider/move-slider.js";
import {
  setSliderTransition,
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
const orderCallButtons = document.querySelectorAll(".order-call-button_btn");
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
window.addEventListener("scroll", showOrHideUpButton);

document.addEventListener("click", smoothScroll);
// order-call-form-2
const crossOrderCallForm2 = document.getElementById(
  "order-call-form-cross-id2"
);
const orderCallForm2 = document.getElementById("order-call-form-block-id2");
const orderButton1 = document.getElementById("order-button-id-1");
const orderButton2 = document.getElementById("order-button-id-2");
crossOrderCallForm2.onclick = () => {
  orderCallForm2.classList.remove("order-call-form-block_show");
};
orderButton1.onclick = () => {
  orderCallForm2.classList.add("order-call-form-block_show");
};
orderButton2.onclick = () => {
  orderCallForm2.classList.add("order-call-form-block_show");
};
//company portfolio
const companyPorfolio = document.getElementById("company-portfolio-id");
// compony portfolio tabs
const companyPortfolioTabs = companyPorfolio.querySelectorAll(
  ".company-portfolio__tab"
);
for (let i = 0, length = companyPortfolioTabs.length; i < length; i++) {
  companyPortfolioTabs[i].onclick = () => {};
}
// slider porfolio
const portfolioSlider = companyPorfolio.querySelector(
  ".company-portfolio__slider"
);
const portfolioSliderTrack = companyPorfolio.querySelector(
  ".company-portfolio__slider-track"
);
const portfolioSliderItem = portfolioSliderTrack.querySelector(
  ".company-portfolio__slider-item"
);
const portfolioSliderArrowLeft = companyPorfolio.querySelector(
  ".company-portfolio__slider-button-prev"
);
const portfolioSliderArrowRight = companyPorfolio.querySelector(
  ".portfolio-examples__slider-button-next"
);
// slider porfolio popup
const sliderPortfolioPopUp = document.getElementById(
  "company-portfolio__popup-id"
);
const sliderPopUpCross = sliderPortfolioPopUp.querySelector(
  ".company-portfolio-popup__close-img"
);

const sliderPopUpBlockContent = sliderPortfolioPopUp.querySelector(
  ".company-portfolio-popup__slider-block-content"
);
const sliderPopUpContentInner = sliderPortfolioPopUp.querySelector(
  ".company-portfolio-popup__content-inner"
);
const sliderPopUpArrowLeft = sliderPortfolioPopUp.querySelector(
  ".company-portfolio-popup__slider-arrow-left"
);
const sliderPopUpArrowRight = sliderPortfolioPopUp.querySelector(
  ".company-portfolio-popup__slider-arrow-right"
);

window.onload = function () {
  const portfolioSliderArrowLeftClick = moveSliderFood.bind(
    null,
    portfolioSliderTrack,
    portfolioSliderItem,
    -1
  );
  const portfolioSliderArrowRightClick = moveSliderFood.bind(
    null,
    portfolioSliderTrack,
    portfolioSliderItem,
    1
  );
  sliderFoodExampleInit({
    sliderTrack: portfolioSliderTrack,
    sliderItemClass: "company-portfolio__slider-item",
    tryMaxSlidesPerView: 3,
    sliderArrowsInnerClass: "company-portfolio__slider-arrow-inner",
    sliderArrowsInnerClassInactive:
      "company-portfolio__slider-arrow-inner_inactive",
    leftArrow: portfolioSliderArrowLeft,
    mobileGridWindowWidth: 999999,
    sliderTransitionClass: "company-portfolio__slider-transition",
  });
  portfolioSliderArrowLeft.addEventListener(
    "click",
    portfolioSliderArrowLeftClick
  );
  portfolioSliderArrowRight.addEventListener(
    "click",
    portfolioSliderArrowRightClick
  );
  const portfolioSliderTrackTransitionStart = sliderTransitionStart.bind(
    null,
    portfolioSliderTrack
  );
  portfolioSliderTrack.addEventListener(
    "transitionstart",
    portfolioSliderTrackTransitionStart
  );
  const portfolioSliderTrackTransitionEnd = sliderTransitionEnd.bind(null, {
    sliderItem: portfolioSliderItem,
    sliderTrack: portfolioSliderTrack,
    arrowLeft: portfolioSliderArrowLeft,
    arrowRight: portfolioSliderArrowRight,
    arrowClassInactive: "company-portfolio__slider-arrow-inner_inactive",
    sliderTrackClassTransition: "company-portfolio__slider-transition",
  });
  portfolioSliderTrack.addEventListener(
    "transitionend",
    portfolioSliderTrackTransitionEnd
  );
  // swipe poerfolio slider popup
  portfolioSlider.addEventListener("touchstart", function (e) {
    const node = this;
    if (node) {
      node.setAttribute("sliderPopUpSwipeClientX", `${e.touches[0].clientX}`);
    }
  });
  portfolioSlider.addEventListener("touchend", function (e) {
    const node = this;
    if (node && node.hasAttribute("sliderPopUpSwipeClientX")) {
      const endX = e.changedTouches[0].clientX;
      const threshold = 10;
      const deltaX =
        endX - parseInt(node.getAttribute("sliderPopUpSwipeClientX"), 10);
      if (Math.abs(deltaX) > threshold) {
        const direction = deltaX > 0 ? -1 : 1;
        moveSliderFood(portfolioSliderTrack, portfolioSliderItem, direction);
      }
    }
  });
  const sliderPopUpCrossClick = closeSliderPopup.bind(null, {
    popUpSliderContentBlock: sliderPopUpBlockContent,
    popUpSlider: sliderPortfolioPopUp,
    classPopUpSliderOpen: "company-portfolio__popup_opened",
    classSliderTrackPopUpTransition: "company-portfolio__slider-transition",
  });
  sliderPopUpCross.addEventListener("click", sliderPopUpCrossClick);
  setPopUpForSliderPopUp({
    popup: sliderPortfolioPopUp,
    sliderBlockContent: sliderPopUpBlockContent,
    slider: sliderPopUpContentInner,
    sliderTrack: portfolioSliderTrack,
    tryMaxSlidesPerView: 1,
    slidesPopupClass: "company-portfolio__slider-item",
    popUpSliderTrackParentClass: "company-portfolio-popup__content-inner",
    popUpSliderTrackClass: "company-portfolio-popup__content",
    classToSelectOriginSlides: "company-portfolio__slider-item",
    popupClassOpen: "company-portfolio__popup_opened",
    contentItemClass: "company-portfolio-item_popup",
    sliderArrowsInnerClass: "company-portfolio-popup__slider-arrow-block",
    arrowLeft: sliderPopUpArrowLeft,
    arrowRight: sliderPopUpArrowRight,
    sliderArrowsInnerClassInactive:
      "company-portfolio__slider-arrow-inner_inactive",
    dataAttributeForSearchSlidesWithoutClones: "data-slide-index",
    dataAttributeAllSlidesWithoutClones: "data-all-slides",
    popupSliderTrackClassTransition: "company-portfolio__slider-transition",
    popupItemClassRemove: "company-portfolio__slider-item_pointer",
    popupItemsInfoArray: [
      {
        elementQuerySelector: ".company-portfolio__item-img",
        elementClassAdd: "company-portfolio__slider-item-img_popup",
        elementClassRemove: "company-portfolio__item-img",
      },
    ],
  });
};
