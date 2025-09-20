import { smoothScroll } from "../utils/smooth-scroll/smooth-scroll.js";
import { setReadyMadeSolutionsLinearGradient } from "../utils/set-ready-made-solutions-linear-gradient/set-ready-made-solutions-linear-gradient.js";
import { showOrHideUpButton } from "../utils/show-or-hide-up-button/show-or-hide-up-button.js";
import { moveSliderFood } from "../utils/slider/move-slider.js";
import {
  sliderTransitionStart,
  sliderTransitionEnd,
} from "../utils/slider/slider-transition.js";
import {
  setPopUpForSliderPopUp,
  closeSliderPopup,
} from "../utils/slider/slider-popup.js";
import { sliderFoodExampleInit } from "../utils/slider/food-slider-init.js";
const header = document.getElementById("header-id");
const readyMeadeSolutionsBlock = document.getElementById(
  "ready-made-solutions-id"
);
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
const serviceKeiteringButtonsOrder = readyMeadeSolutionsBlock.querySelectorAll(
  ".service-keitering__button-order"
);
for (let i = 0, length = serviceKeiteringButtonsOrder.length; i < length; i++) {
  serviceKeiteringButtonsOrder[i].onclick = () => {
    orderCallForm2.classList.add("order-call-form-block_show");
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
const readyMadeSolutionsContent = readyMeadeSolutionsBlock.querySelector(
  ".ready-made-solutions__content"
);

// tabs ready made solutions
const readyMadeSolutionsButtons = readyMeadeSolutionsBlock.querySelectorAll(
  ".ready-made-solutions__tabs-button"
);
// slider menu galary
const galaryMenu = document.getElementById("menu-galery-id");
const galaryMenuSlider = galaryMenu.querySelector(".menu-galery__slider");
const galaryMenuSliderTrack = galaryMenu.querySelector(
  ".menu-galery__slider-track"
);
const galaryMenuSliderItem = galaryMenuSliderTrack.querySelector(
  ".menu-galery__slider-item"
);
const galaryMenuSliderArrowLeft = galaryMenu.querySelector(
  ".menu-galery__slider-button-prev"
);
const galaryMenuSliderArrowRight = galaryMenu.querySelector(
  ".menu-galery__slider-button-next"
);
// slider menu galary popup
const sliderGalaryMenuPopUp = document.getElementById("menu-galery__popup-id");
const sliderPopUpCross = sliderGalaryMenuPopUp.querySelector(
  ".menu-galery-popup__close-img"
);
const sliderPopUpBlockContent = sliderGalaryMenuPopUp.querySelector(
  ".menu-galery-popup__slider-block-content"
);
const sliderPopUpContentInner = sliderGalaryMenuPopUp.querySelector(
  ".menu-galery-popup__content-inner"
);
const sliderPopUpArrowLeft = sliderGalaryMenuPopUp.querySelector(
  ".menu-galery-popup__slider-arrow-left"
);
const sliderPopUpArrowRight = sliderGalaryMenuPopUp.querySelector(
  ".menu-galery-popup__slider-arrow-right"
);
// up button
window.addEventListener("scroll", showOrHideUpButton);
// smooth scroll
document.addEventListener("click", smoothScroll);
// onload
window.onload = function () {
  setReadyMadeSolutionsLinearGradient(readyMadeSolutionsContent, "#423329");
  for (let i = 0, length = readyMadeSolutionsButtons.length; i < length; i++) {
    readyMadeSolutionsButtons[i].onclick = () => {
      for (let j = 0; j < length; j++) {
        if (
          readyMadeSolutionsButtons[j].classList.contains(
            "ready-made-solutions__tabs-button_active"
          )
        ) {
          const attribute = readyMadeSolutionsButtons[j].getAttribute(
            "data-ready-made-solutions-tab"
          );
          readyMeadeSolutionsBlock
            .querySelector(`.${attribute}`)
            .classList.add("ready-made-solutions__content_hidden");
          readyMadeSolutionsButtons[j].classList.remove(
            "ready-made-solutions__tabs-button_active"
          );
        }
      }
      const attribute = readyMadeSolutionsButtons[i].getAttribute(
        "data-ready-made-solutions-tab"
      );
      const readyMadeSolutionsContentBlock =
        readyMeadeSolutionsBlock.querySelector(`.${attribute}`);
      if (readyMadeSolutionsContentBlock) {
        switch (attribute) {
          case "ready-made-solutions__content_coffee-break":
            setReadyMadeSolutionsLinearGradient(
              readyMadeSolutionsContentBlock,
              "#423329"
            );
            break;
          case "ready-made-solutions__content_outdoor-bars":
            setReadyMadeSolutionsLinearGradient(
              readyMadeSolutionsContentBlock,
              "#292E42"
            );
            break;
          case "ready-made-solutions__content_furshet":
            setReadyMadeSolutionsLinearGradient(
              readyMadeSolutionsContentBlock,
              "#698155"
            );
            break;
          case "ready-made-solutions__content_bankets":
            setReadyMadeSolutionsLinearGradient(
              readyMadeSolutionsContentBlock,
              "#557A81"
            );
            break;
          case "ready-made-solutions__content_gala":
            setReadyMadeSolutionsLinearGradient(
              readyMadeSolutionsContentBlock,
              "#3B4249"
            );
            break;
          case "ready-made-solutions__content_child-keitering":
            setReadyMadeSolutionsLinearGradient(
              readyMadeSolutionsContentBlock,
              "#C76A6A"
            );
            break;
        }
        readyMadeSolutionsContentBlock.classList.remove(
          "ready-made-solutions__content_hidden"
        );
        readyMadeSolutionsButtons[i].classList.add(
          "ready-made-solutions__tabs-button_active"
        );
      }
    };
  }
  // set slider portfolio not slider popup
  // click to arrows
  const galaryMenuSliderArrowLeftClick = moveSliderFood.bind(
    null,
    galaryMenuSliderTrack,
    galaryMenuSliderItem,
    -1
  );
  const galaryMenuSliderArrowRightClick = moveSliderFood.bind(
    null,
    galaryMenuSliderTrack,
    galaryMenuSliderItem,
    1
  );
  sliderFoodExampleInit({
    sliderTrack: galaryMenuSliderTrack,
    sliderItemClass: "menu-galery__slider-item",
    tryMaxSlidesPerView: 3,
    sliderArrowsInnerClass: "menu-galery__slider-arrow-inner",
    sliderArrowsInnerClassInactive: "menu-galery__slider-arrow-inner_inactive",
    leftArrow: galaryMenuSliderArrowLeft,
    mobileGridWindowWidth: 999999,
    sliderTransitionClass: "menu-galery__slider-transition",
  });
  galaryMenuSliderArrowLeft.addEventListener(
    "click",
    galaryMenuSliderArrowLeftClick
  );
  galaryMenuSliderArrowRight.addEventListener(
    "click",
    galaryMenuSliderArrowRightClick
  );
  //transition
  const galaryMenuSliderTrackTransitionStart = sliderTransitionStart.bind(
    null,
    galaryMenuSliderTrack
  );
  galaryMenuSliderTrack.addEventListener(
    "transitionstart",
    galaryMenuSliderTrackTransitionStart
  );
  const galaryMenuSliderTrackTransitionEnd = sliderTransitionEnd.bind(null, {
    sliderItem: galaryMenuSliderItem,
    sliderTrack: galaryMenuSliderTrack,
    arrowLeft: galaryMenuSliderArrowLeft,
    arrowRight: galaryMenuSliderArrowRight,
    arrowClassInactive: "menu-galery__slider-arrow-inner_inactive",
    sliderTrackClassTransition: "menu-galery__slider-transition",
  });
  galaryMenuSliderTrack.addEventListener(
    "transitionend",
    galaryMenuSliderTrackTransitionEnd
  );
  // swipe poerfolio slider popup
  galaryMenuSlider.addEventListener("touchstart", function (e) {
    const node = this;
    if (node) {
      node.setAttribute("sliderPopUpSwipeClientX", `${e.touches[0].clientX}`);
    }
  });
  galaryMenuSlider.addEventListener("touchend", function (e) {
    const node = this;
    if (node && node.hasAttribute("sliderPopUpSwipeClientX")) {
      const endX = e.changedTouches[0].clientX;
      const threshold = 10;
      const deltaX =
        endX - parseInt(node.getAttribute("sliderPopUpSwipeClientX"), 10);
      if (Math.abs(deltaX) > threshold) {
        const direction = deltaX > 0 ? -1 : 1;
        moveSliderFood(galaryMenuSliderTrack, galaryMenuSliderItem, direction);
      }
    }
  });
  // click to cross to close popup slider portfoilo block
  const sliderPopUpCrossClick = closeSliderPopup.bind(null, {
    popUpSliderContentBlock: sliderPopUpBlockContent,
    popUpSlider: sliderGalaryMenuPopUp,
    classPopUpSliderOpen: "menu-galery__popup_opened",
    classSliderTrackPopUpTransition: "menu-galery__slider-transition",
  });
  sliderPopUpCross.addEventListener("click", sliderPopUpCrossClick);
  // set up slider popup portfolio
  setPopUpForSliderPopUp({
    popup: sliderGalaryMenuPopUp,
    sliderBlockContent: sliderPopUpBlockContent,
    slider: sliderPopUpContentInner,
    sliderTrack: galaryMenuSliderTrack,
    tryMaxSlidesPerView: 1,
    slidesPopupClass: "menu-galery__slider-item",
    popUpSliderTrackParentClass: "menu-galery-popup__content-inner",
    popUpSliderTrackClass: "menu-galery-popup__content",
    classToSelectOriginSlides: "menu-galery__slider-item",
    popupClassOpen: "menu-galery__popup_opened",
    contentItemClass: "menu-galery-item_popup",
    sliderArrowsInnerClass: "menu-galery-popup__slider-arrow-block",
    arrowLeft: sliderPopUpArrowLeft,
    arrowRight: sliderPopUpArrowRight,
    sliderArrowsInnerClassInactive: "menu-galery__slider-arrow-inner_inactive",
    dataAttributeForSearchSlidesWithoutClones: "data-slide-index",
    dataAttributeAllSlidesWithoutClones: "data-all-slides",
    popupSliderTrackClassTransition: "menu-galery__slider-transition",
    popupItemClassRemove: "menu-galery__slider-item_pointer",
    popupItemsInfoArray: [
      {
        elementQuerySelector: ".menu-galery__item-img",
        elementClassAdd: "menu-galery__slider-item-img_popup",
        elementClassRemove: "menu-galery__item-img",
      },
    ],
  });
};
