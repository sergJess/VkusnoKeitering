import smoothScroll from "./utils/smooth-scroll.js";
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
function getGapValues(element) {
  const parent = element.parentNode.clientWidth;
  const reformGapValue = (gapString) =>
    gapString.includes("%")
      ? parent * (parseFloat(gapString) / 100)
      : parseFloat(gapString);
  const gap = getComputedStyle(element).gap.split(" ");
  if (gap.length == 2) {
    return [reformGapValue(gap[0]), reformGapValue(gap[1])];
  }
  if (gap.length == 1) {
    return [reformGapValue(gap[0]), reformGapValue(gap[0])];
  }
  return [0, 0];
}
function sliderFoodExampleInit(sliderConfig) {
  const sliderTrack = sliderConfig.sliderTrack;
  const slides = sliderTrack.querySelectorAll(
    `.${sliderConfig.sliderItemClass}`
  );
  const slidesCount = slides.length;
  if (slidesCount > 0) {
    const maxSlidesPerView = sliderConfig.tryMaxSlidesPerView;
    const slider = sliderTrack.parentNode;
    sliderTrack.setAttribute("data-transform", "0");
    sliderTrack.setAttribute("data-all-slides", `${slidesCount}`);
    sliderTrack.setAttribute("data-is-active-arrows", "false");
    sliderTrack.setAttribute("data-left-arrow-unactive", "false");
    sliderTrack.setAttribute("data-right-arrow-unactive", "false");
    const sliderWidth = slider.clientWidth;
    const paddingLeft = parseInt(
      getComputedStyle(slider).getPropertyValue("padding-left")
    );
    const paddingRight = parseInt(
      getComputedStyle(slider).getPropertyValue("padding-right")
    );
    const widthPadding = paddingLeft + paddingRight;
    const leftWidthForSliderTrack = parseInt(sliderWidth, 10) - widthPadding;
    const gapHorizontal = getGapValues(sliderTrack)[1];
    const slideWidth = parseInt(slides[0].clientWidth, 10);
    const awailableSlidesToShow =
      leftWidthForSliderTrack / (slideWidth + gapHorizontal) < maxSlidesPerView
        ? Math.trunc(leftWidthForSliderTrack / (slideWidth + gapHorizontal))
        : maxSlidesPerView;
    slider.style.width = `${
      slideWidth * awailableSlidesToShow +
      (awailableSlidesToShow - 1) * gapHorizontal
    }px`;
    sliderTrack.setAttribute(
      "data-slides-per-view",
      `${awailableSlidesToShow}`
    );
    if (awailableSlidesToShow >= slidesCount) {
      //make slider arrows inactive
      const sliderParent = slider.parentNode;
      const sliderArrowsInner = sliderParent.querySelectorAll(
        `.${sliderConfig.sliderArrowsInnerClass}`
      );
      for (let i = 0, length = sliderArrowsInner.length; i < length; i++) {
        sliderArrowsInner[i].classList.add(
          `${sliderConfig.sliderArrowsInnerClassInactive}`
        );
      }
      return;
    }
    if (
      awailableSlidesToShow < slidesCount &&
      window.outerWidth <= sliderConfig.mobileGridWindowWidth
    ) {
      sliderTrack.setAttribute("data-current-slide", "0");
      sliderTrack.setAttribute("data-is-active-arrows", "true");
      sliderTrack.setAttribute("data-is-mobile-grid", "true");
      sliderTrack.setAttribute("data-left-arrow-unactive", "true");
      const leftArrow = sliderConfig.leftArrow;
      leftArrow.classList.add(`${sliderConfig.sliderArrowsInnerClassInactive}`);
      for (let i = 0; i < slidesCount; i++) {
        slides[i].setAttribute("data-slide-index", `${i}`);
      }
      const columnsGrid = Math.ceil(slidesCount / 2);
      const rowsGrid = 2;
      sliderTrack.setAttribute("data-rows-grid", rowsGrid);
      sliderTrack.style.display = "grid";
      sliderTrack.style.gridTemplateColumns = `repeat(${columnsGrid}, ${slideWidth}px)`;
      sliderTrack.style.gridTemplateRows = `${rowsGrid}`;
      return;
    }
    if (awailableSlidesToShow < slidesCount) {
      sliderTrack.setAttribute("data-current-slide", "0");
      sliderTrack.setAttribute("data-is-active-arrows", "true");
      for (let i = 0; i < slidesCount; i++) {
        slides[i].setAttribute("data-slide-index", `${i}`);
      }
      for (let i = 0; i < awailableSlidesToShow; i++) {
        const node = slides[i].cloneNode(true);
        node.setAttribute("data-slide-index", `${i}`);
        sliderTrack.append(node);
      }
      for (
        let i = slidesCount - 1;
        i >= slidesCount - awailableSlidesToShow;
        i--
      ) {
        const node = slides[i].cloneNode(true);
        node.setAttribute("data-slide-index", `${i}`);
        sliderTrack.prepend(node);
      }
      for (let i = 0; i < awailableSlidesToShow; i++) {
        moveSliderFood(sliderTrack, slides[0], 1);
      }
      sliderTrack.setAttribute(
        "data-start-position",
        sliderTrack.getAttribute("data-transform")
      );
      sliderTrack.setAttribute("data-current-slide", "0");
      return;
    }
  }
}
function setSliderTransition(sliderTrack, className) {
  sliderTrack.classList.add(`${className}`);
}

function moveSliderFood(sliderTrack, sliderItem, direction) {
  if (sliderTrack.getAttribute("data-is-active-arrows") == "true") {
    const currentSlide = parseInt(
      sliderTrack.getAttribute("data-current-slide"),
      10
    );
    const gapHorizontal = getGapValues(sliderTrack)[1];
    const shift = sliderItem.offsetWidth;
    let currentIndex = sliderTrack.getAttribute("data-transform");
    if (direction == -1) {
      const isUnactiveArrowLeft = sliderTrack.getAttribute(
        "data-left-arrow-unactive"
      );
      if (isUnactiveArrowLeft == "true") return;
      sliderTrack.style.transform = `translateX(${
        +currentIndex + (+shift + gapHorizontal)
      }px)`;
      sliderTrack.setAttribute(
        "data-transform",
        +currentIndex + (+shift + gapHorizontal)
      );
      sliderTrack.setAttribute("data-current-slide", `${currentSlide - 1}`);
    } else {
      const isUnactiveArrowRight = sliderTrack.getAttribute(
        "data-right-arrow-unactive"
      );
      if (isUnactiveArrowRight == "true") return;
      sliderTrack.setAttribute(
        "data-transform",
        +currentIndex - (+shift + gapHorizontal)
      );
      sliderTrack.setAttribute("data-current-slide", `${currentSlide + 1}`);
      sliderTrack.style.transform = `translateX(${
        +currentIndex - (+shift + gapHorizontal)
      }px)`;
    }
  }
}

function sliderTransitionStart(sliderTrack) {
  sliderTrack.setAttribute("data-is-active-arrows", "false");
}
function sliderTransitionEnd(sliderConfig) {
  const sliderTrack = sliderConfig.sliderTrack;
  const arrowLeft = sliderConfig.arrowLeft;
  const arrowRight = sliderConfig.arrowRight;
  const sliderTrackClassTransition = sliderConfig.sliderTrackClassTransition;
  const sliderItem = sliderConfig.sliderItem;
  const isGridMobile =
    sliderTrack.getAttribute("data-is-mobile-grid") == "true";
  const slidesAwailableToView = parseInt(
    sliderTrack.getAttribute("data-slides-per-view"),
    10
  );
  const currentSlide = parseInt(
    sliderTrack.getAttribute("data-current-slide"),
    10
  );
  const slidesWithoutClones = parseInt(
    sliderTrack.getAttribute("data-all-slides"),
    10
  );
  if (isGridMobile) {
    const gridRows = parseInt(sliderTrack.getAttribute("data-rows-grid"), 10);
    const rightBorderToSlide = Math.floor(slidesWithoutClones / gridRows);
    if (currentSlide == 0) {
      arrowLeft.classList.add(sliderConfig.arrowClassInactive);
      sliderTrack.setAttribute("data-left-arrow-unactive", "true");
    }
    if (currentSlide > 0) {
      arrowLeft.classList.remove(sliderConfig.arrowClassInactive);
      sliderTrack.setAttribute("data-left-arrow-unactive", "false");
    }
    if (currentSlide == rightBorderToSlide) {
      arrowRight.classList.add(sliderConfig.arrowClassInactive);
      sliderTrack.setAttribute("data-right-arrow-unactive", "true");
    }
    if (currentSlide < rightBorderToSlide) {
      arrowRight.classList.remove(sliderConfig.arrowClassInactive);
      sliderTrack.setAttribute("data-right-arrow-unactive", "false");
    }
    sliderTrack.setAttribute("data-is-active-arrows", "true");
    return;
  }
  if (currentSlide == -1 * slidesAwailableToView) {
    sliderTrack.classList.remove(`${sliderTrackClassTransition}`);
    for (
      let i = currentSlide;
      i < slidesWithoutClones - slidesAwailableToView;
      i++
    ) {
      sliderTrack.setAttribute("data-is-active-arrows", "true");
      moveSliderFood(sliderTrack, sliderItem, 1);
    }
    setTimeout(function () {
      sliderTrack.classList.add(`${sliderTrackClassTransition}`);
    }, 0);
    return;
  }
  if (currentSlide == slidesWithoutClones) {
    sliderTrack.classList.remove(`${sliderTrackClassTransition}`);
    for (let i = currentSlide; i > 0; i--) {
      sliderTrack.setAttribute("data-is-active-arrows", "true");
      moveSliderFood(sliderTrack, sliderItem, -1);
    }
    setTimeout(function () {
      sliderTrack.classList.add(`${sliderTrackClassTransition}`);
    }, 0);
    return;
  }
  sliderTrack.setAttribute("data-is-active-arrows", "true");
}
//slider popup
const sliderPopUp = document.getElementById("food-example-slider__popup-id");
const sliderPopUpCross = sliderPopUp.querySelector(
  ".food-example-popup__close-img"
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
let sliderPopUpSwipeClientX = 0;
function setPopUpForSliderPopUp(config) {
  const popup = config.popup;
  const popupSliderTrack = config.popupSliderTrack;
  const sliderTrack = config.sliderTrack;
  const classToSelectOriginSlides = config.classToSelectOriginSlides;
  const popupClassOpen = config.popupClassOpen;
  const contentItemClass = config.contentItemClass;
  const arrowLeft = config.arrowLeft;
  const arrowRight = config.arrowRight;
  const tryMaxSlidesPerView = config.tryMaxSlidesPerView;
  const sliderArrowsInnerClass = config.sliderArrowsInnerClass;
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
      for (let j = 0; j < slidesWithoutClones; j++) {
        const cloneNode = sliderTrack
          .querySelector(
            `[${dataAttributeForSearchSlidesWithoutClones}="${j}"]`
          )
          .cloneNode(true);
        cloneNode.classList.add(contentItemClass);
        popupSliderTrack.appendChild(cloneNode);
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
          ".food-example-goods__item"
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
        sliderPopUpSwipeClientX = e.touches[0].clientX;
      });
      popupSliderTrack.parentNode.addEventListener("touchend", function (e) {
        const endX = e.changedTouches[0].clientX;
        const threshold = 10;
        const deltaX = endX - sliderPopUpSwipeClientX;
        if (Math.abs(deltaX) > threshold) {
          const direction = deltaX > 0 ? -1 : 1;
          moveSliderFood(
            popupSliderTrack,
            popupSliderTrack.firstChild,
            direction
          );
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
  const classSliderTrackPopUpTransition =
    config.classSliderTrackPopUpTransition;
  popUpSlider.classList.remove(classPopUpSliderOpen);
  sliderTrackPopUp.innerHTML = "";
  sliderTrackPopUp.classList.remove(classSliderTrackPopUpTransition);
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
  console.log("React + Ang");
  sliderPopUpCross.addEventListener(
    "click",
    closeSliderPopup.bind(null, {
      sliderTrackPopUp: sliderPopUpContent,
      popUpSlider: sliderPopUp,
      classPopUpSliderOpen: "food-example-slider__popup_opened",
      classSliderTrackPopUpTransition: "food-example-goods__slider",
    })
  );
  document.addEventListener("click", smoothScroll);
  setPopUpForSliderPopUp({
    popup: sliderPopUp,
    popupSliderTrack: sliderPopUpContent,
    popupClose: "",
    slider: sliderPopUpContentInner,
    sliderTrack: foodExampleSliderInner,
    tryMaxSlidesPerView: 1,
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
