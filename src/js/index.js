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
const navigationLists = header.querySelectorAll(".navigation__list");
for (let i = 0, length = navigationLists.length; i < length; i++) {
  navigationLists[i].onclick = () => {
    const navigationSubmenu = navigationLists[i].nextElementSibling;
    if (navigationSubmenu)
      navigationSubmenu.classList.toggle("navigation__submenu_show");
  };
}
//smooth scroll
function isNodeOrParent(target) {
  let anchor = target;
  if (target.parentNode.classList.contains("scroll-to")) {
    anchor = target.parentNode;
    return anchor;
  }
  return anchor;
}
function smoothScroll(e) {
  if (
    e.target.classList.contains("scroll-to") ||
    e.target.parentNode.classList.contains("scroll-to")
  ) {
    e.preventDefault();
    const scrollSpeed = 0.7;
    let windowOffSetY = window.pageYOffset;
    let anchorElement = isNodeOrParent(e.target)
      .getAttribute("href")
      .replace("#", "");
    let toScrollElelement = document.getElementById(anchorElement);
    let topCoordsOftoScrollElelement =
      toScrollElelement.getBoundingClientRect().top;
    let start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) start = time;
      let progress = time - start;
      let windowCoordsToScrollY =
        topCoordsOftoScrollElelement < 0
          ? Math.max(
              windowOffSetY - progress / scrollSpeed,
              windowOffSetY + topCoordsOftoScrollElelement
            )
          : Math.min(
              windowOffSetY + progress / scrollSpeed,
              windowOffSetY + topCoordsOftoScrollElelement
            );
      window.scrollTo(0, windowCoordsToScrollY);
      if (
        windowCoordsToScrollY !=
        windowOffSetY + topCoordsOftoScrollElelement
      ) {
        requestAnimationFrame(step);
      }
    }
  }
}
document.addEventListener("click", smoothScroll);
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
      moveSliderFood(sliderTrack, foodExampleSliderItem, 1);
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
      moveSliderFood(sliderTrack, foodExampleSliderItem, -1);
    }
    setTimeout(function () {
      sliderTrack.classList.add(`${sliderTrackClassTransition}`);
    }, 0);
    return;
  }
  sliderTrack.setAttribute("data-is-active-arrows", "true");
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

window.onload = function () {
  sliderFoodExampleInit({
    slider: foodExampleSlider,
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
      sliderBlock: foodExampleBlock,
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
  const sliderPopUp = document.getElementById("food-example-slider__popup-id");
  const sliderPopUpCross = sliderPopUp.querySelector(
    ".food-example-popup__close-img"
  );
  sliderPopUpCross.onclick = () => {
    sliderPopUp.classList.remove("food-example-slider__popup_opened");
  };
  const sliderPopUpContentInner = sliderPopUp.querySelector(
    ".food-example-slider__popup-content-inner"
  );
  const sliderPopUpContent = sliderPopUp.querySelector(
    ".food-example-slider__popup-content"
  );
  const sliderPopUpArrowLeft = sliderPopUp.querySelector(
    ".food-example__slider-button-prev"
  );
  const sliderPopUpArrowRight = sliderPopUp.querySelector(
    ".food-example__slider-button-next"
  );
  setPopUpForSliderPopUp({
    popup: sliderPopUp,
    popupContent: sliderPopUpContent,
    popupClose: "",
    sliderTrack: foodExampleSliderInner,
    popupClassOpen: "food-example-slider__popup_opened",
    contentItemClass: "jess",
  });
  function setPopUpForSliderPopUp(config) {
    const popup = config.popup;
    const popupContent = config.popupContent;
    const popupClose = config.popupClose;
    const sliderTrack = config.sliderTrack;
    const slides = sliderTrack.children;
    const popupClassOpen = config.popupClassOpen;
    const contentItemClass = config.contentItemClass;
    for (let i = 0, length = slides.length; i < length; i++) {
      slides[i].onclick = () => {
        popupContent.innerHTML = "";
        const cloneNode = slides[i].cloneNode(true);
        cloneNode.classList.add(contentItemClass);
        popupContent.appendChild(cloneNode);
        popup.classList.add(popupClassOpen);
      };
    }
  }
};
