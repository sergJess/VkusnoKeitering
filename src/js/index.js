import { smoothScroll } from "./utils/smooth-scroll/smooth-scroll.js";
import { moveSliderFood } from "./utils/slider/move-slider.js";
import {
  setSliderTransition,
  sliderTransitionStart,
  sliderTransitionEnd,
} from "./utils/slider/slider-transition.js";
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
const porfolioPopUpCrossClose = portfolio.querySelector(
  ".porfolio__examples-popup__close-img"
);
// porfolioPopUpCrossClose.addEventListener("click");
for (let i = 0, length = portfolioSlides.length; i < length; i++) {
  portfolioSlides[i].setAttribute("data-slide-index", i);
  portfolioSlides[i].onclick = () => {};
}
const porfolioExamples = portfolio.querySelector(".porfolio__examples");
const porfolioLeftArrow = portfolio.querySelector(
  ".portfolio-examples__slider-button-prev"
);
const porfolioRightArrow = portfolio.querySelector(
  ".portfolio-examples__slider-button-next"
);
// porfolioExamples.addEventListener("scroll", function () {
//   const items = porfolioExamples.querySelectorAll(".porfolio__examples-item");
//   let blockWidth = 0;
//   for (let i = 0, length = items.length; i < length; i++) {
//     blockWidth += items[i].offsetWidth;
//   }

//   const windowWidth = window.innerWidth;
//   const scrollRightBorder = windowWidth - blockWidth;
//   console.log(scrollRightBorder);
// });
porfolioLeftArrow.onclick = () => {
  porfolioExamples.scrollBy({ top: 0, left: -350, behavior: "smooth" });
};
porfolioRightArrow.onclick = () => {
  porfolioExamples.scrollBy({ top: 0, left: 350, behavior: "smooth" });
};
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

//slider popup
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
const sliderPopUpContent = sliderPopUp.querySelector(
  ".food-example-slider__popup-content"
);
const sliderPopUpArrowLeft = sliderPopUp.querySelector(
  ".food-example__popup-slider-arrow-left"
);
const sliderPopUpArrowRight = sliderPopUp.querySelector(
  ".food-example__popup-slider-arrow-right"
);
function setPopUpForSliderPopUp(config) {
  const popup = config.popup;
  const sliderBlockContent = config.sliderBlockContent;
  // const popupSliderTrack = config.popupSliderTrack;
  const sliderTrack = config.sliderTrack;
  const classToSelectOriginSlides = config.classToSelectOriginSlides;
  const popupClassOpen = config.popupClassOpen;
  const contentItemClass = config.contentItemClass;
  const arrowLeft = config.arrowLeft;
  const arrowRight = config.arrowRight;
  const tryMaxSlidesPerView = config.tryMaxSlidesPerView;
  const sliderArrowsInnerClass = config.sliderArrowsInnerClass;
  const slidesPopupClass = config.slidesPopupClass;
  const dataAttributeForSearchSlidesWithoutClones =
    config.dataAttributeForSearchSlidesWithoutClones;
  const dataAttributeAllSlidesWithoutClones =
    config.dataAttributeAllSlidesWithoutClones;
  const sliderArrowsInnerClassInactive = config.sliderArrowsInnerClassInactive;
  const popupSliderTrackClassTransition =
    config.popupSliderTrackClassTransition;
  const slides = sliderTrack.querySelectorAll(`.${classToSelectOriginSlides}`);
  const popupItemsInfoArray = config.popupItemsInfoArray;
  for (let i = 0, length = slides.length; i < length; i++) {
    // click on slider item
    slides[i].onclick = () => {
      const slidesWithoutClones = parseInt(
        sliderTrack.getAttribute(`${dataAttributeAllSlidesWithoutClones}`),
        10
      );
      const popUpSliderTrackParent = document.createElement("div");
      popUpSliderTrackParent.classList.add(
        "food-example-slider__popup-content-inner"
      );
      const popupSliderTrack = document.createElement("div");
      for (let j = 0; j < slidesWithoutClones; j++) {
        const cloneNode = sliderTrack
          .querySelector(
            `[${dataAttributeForSearchSlidesWithoutClones}="${j}"]`
          )
          .cloneNode(true);
        popupSliderTrack.classList.add("food-example-slider__popup-content");
        cloneNode.classList.add(contentItemClass);
        popupSliderTrack.appendChild(cloneNode);
        popUpSliderTrackParent.appendChild(popupSliderTrack);
        sliderBlockContent.appendChild(popUpSliderTrackParent);
      }
      popup.classList.add(popupClassOpen);
      requestAnimationFrame(() => {
        sliderFoodExampleInit({
          sliderTrack: popupSliderTrack,
          sliderItemClass: contentItemClass,
          tryMaxSlidesPerView: tryMaxSlidesPerView,
          sliderArrowsInnerClass: `${sliderArrowsInnerClass}`,
          sliderArrowsInnerClassInactive: `${sliderArrowsInnerClassInactive}`,
          leftArrow: arrowLeft,
          mobileGridWindowWidth: 0,
        });
        setSliderToCorrectPositionInPopUp({
          sliderItemClass: contentItemClass,
          sliderTrack: popupSliderTrack,
          clickedSlide: slides[i],
        });
        const slidesOfPopUpSliderTrack = popupSliderTrack.querySelectorAll(
          `.${slidesPopupClass}`
        );
        for (let i = 0; i < slidesOfPopUpSliderTrack.length; i++) {
          for (let j = 0; j < popupItemsInfoArray.length; j++) {
            const element = slidesOfPopUpSliderTrack[i].querySelector(
              `${popupItemsInfoArray[j].elementQuerySelector}`
            );
            if (element) {
              if (popupItemsInfoArray[j].hasOwnProperty("elementClassRemove"))
                element.classList.remove(
                  `${popupItemsInfoArray[j].elementClassRemove}`
                );
              if (popupItemsInfoArray[j].hasOwnProperty("elementClassAdd"))
                element.classList.add(
                  `${popupItemsInfoArray[j].elementClassAdd}`
                );
            }
          }
          if (config.hasOwnProperty("popupItemClassRemove"))
            slidesOfPopUpSliderTrack[i].classList.remove(
              `${config.popupItemClassRemove}`
            );
        }
        arrowLeft.addEventListener(
          "click",
          moveSliderFood.bind(
            null,
            popupSliderTrack,
            popupSliderTrack.querySelector(`.${contentItemClass}`),
            -1
          )
        );
        arrowRight.addEventListener(
          "click",
          moveSliderFood.bind(
            null,
            popupSliderTrack,
            popupSliderTrack.querySelector(`.${contentItemClass}`),
            1
          )
        );
      });
      popupSliderTrack.addEventListener(
        "transitionstart",
        sliderTransitionStart.bind(null, popupSliderTrack)
      );
      popupSliderTrack.addEventListener(
        "transitionend",
        sliderTransitionEnd.bind(null, {
          sliderItem: popupSliderTrack.querySelector(`.${contentItemClass}`),
          sliderTrack: popupSliderTrack,
          arrowLeft: arrowLeft,
          arrowRight: arrowRight,
          arrowClassInactive: "food-example__slider-arrow-inner_inactive",
          sliderTrackClassTransition: "food-example-goods__slider",
        })
      );
      popupSliderTrack.parentNode.addEventListener("touchstart", function (e) {
        const node = this;
        if (node) {
          node.setAttribute(
            "sliderPopUpSwipeClientX",
            `${e.touches[0].clientX}`
          );
        }
      });
      popupSliderTrack.parentNode.addEventListener("touchend", function (e) {
        const node = this;
        if (node && node.hasAttribute("sliderPopUpSwipeClientX")) {
          const endX = e.changedTouches[0].clientX;
          const threshold = 10;
          const deltaX =
            endX - parseInt(node.getAttribute("sliderPopUpSwipeClientX"), 10);
          if (Math.abs(deltaX) > threshold) {
            const direction = deltaX > 0 ? -1 : 1;
            moveSliderFood(
              popupSliderTrack,
              popupSliderTrack.firstChild,
              direction
            );
          }
        }
      });
      setTimeout(() => {
        setSliderTransition(
          popupSliderTrack,
          `${popupSliderTrackClassTransition}`
        );
      }, 10);
    };
  }
}
// set slider to correct position
function setSliderToCorrectPositionInPopUp(config) {
  const sliderTrack = config.sliderTrack;
  const clickedSlide = config.clickedSlide;
  const sliderItem = sliderTrack.querySelector(`.${config.sliderItemClass}`);
  const currentSlide = Math.abs(
    parseInt(sliderTrack.getAttribute("data-current-slide"), 10)
  );
  const clickedSlideNumber = parseInt(
    clickedSlide.getAttribute("data-slide-index"),
    10
  );
  if (clickedSlideNumber == currentSlide) return;
  if (clickedSlideNumber > currentSlide) {
    for (let i = currentSlide; i < clickedSlideNumber; i++) {
      moveSliderFood(sliderTrack, sliderItem, 1);
    }
    return;
  }
  if (clickedSlideNumber < currentSlide) {
    for (let i = currentSlide; i > clickedSlideNumber; i--) {
      moveSliderFood(sliderTrack, sliderItem, -1);
    }
    return;
  }
}
// close slider popup
function closeSliderPopup(config) {
  const sliderTrackPopUp = config.sliderTrackPopUp;
  const popUpSlider = config.popUpSlider;
  const classPopUpSliderOpen = config.classPopUpSliderOpen;
  const popUpSliderContentBlock = config.popUpSliderContentBlock;
  // const classSliderTrackPopUpTransition =
  //   config.classSliderTrackPopUpTransition;
  popUpSlider.classList.remove(classPopUpSliderOpen);
  popUpSliderContentBlock.innerHTML = "";
}
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
  foodExampleSliderInner.addEventListener(
    "transitionstart",
    sliderTransitionStart.bind(null, foodExampleSliderInner)
  );
  foodExampleSliderInner.addEventListener(
    "transitionend",
    sliderTransitionEnd.bind(null, {
      sliderItem: foodExampleSliderItem,
      sliderTrack: foodExampleSliderInner,
      arrowLeft: foodExampleArrowLeft,
      arrowRight: foodExampleArrowRight,
      arrowClassInactive: "food-example__slider-arrow-inner_inactive",
      sliderTrackClassTransition: "food-example-goods__slider",
    })
  );
  let startTouchX = 0;
  foodExampleSlider.addEventListener("touchstart", function (e) {
    startTouchX = e.touches[0].clientX;
  });
  foodExampleSlider.addEventListener("touchend", function (e) {
    const endX = e.changedTouches[0].clientX;
    const threshold = 10;
    const deltaX = endX - startTouchX;
    if (Math.abs(deltaX) > threshold) {
      const direction = deltaX > 0 ? -1 : 1;
      moveSliderFood(foodExampleSliderInner, foodExampleSliderItem, direction);
    }
  });
  sliderPopUpCross.addEventListener(
    "click",
    closeSliderPopup.bind(null, {
      popUpSliderContentBlock: sliderPopUpBlockContent,
      popUpSlider: sliderPopUp,
      classPopUpSliderOpen: "food-example-slider__popup_opened",
      classSliderTrackPopUpTransition: "food-example-goods__slider",
    })
  );
  document.addEventListener("click", smoothScroll);
  setPopUpForSliderPopUp({
    popup: sliderPopUp,
    sliderBlockContent: sliderPopUpBlockContent,
    popupClose: "",
    slider: sliderPopUpContentInner,
    sliderTrack: foodExampleSliderInner,
    tryMaxSlidesPerView: 1,
    slidesPopupClass: "food-example-goods__item",
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
