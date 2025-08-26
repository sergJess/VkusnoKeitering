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
    sliderTrack.setAttribute("data-is-active-arrows", "false");
    const sliderWidth = slider.clientWidth;
    const paddingLeft = parseInt(
      getComputedStyle(slider).getPropertyValue("padding-left")
    );
    const paddingRight = parseInt(
      getComputedStyle(slider).getPropertyValue("padding-right")
    );
    const widthPadding = paddingLeft + paddingRight;
    const leftWidthForSliderTrack = parseInt(sliderWidth, 10) - widthPadding;
    const marginRight = getComputedStyle(slides[0]).marginRight;
    const digitsMarginRight = parseInt(marginRight.match(/\d+/), 10);
    const slideWidth = parseInt(slides[0].clientWidth, 10);
    const awailableSlidesToShow =
      leftWidthForSliderTrack / (slideWidth + digitsMarginRight) <
      maxSlidesPerView
        ? Math.trunc(leftWidthForSliderTrack / (slideWidth + digitsMarginRight))
        : maxSlidesPerView;
    slider.style.width = `${
      slideWidth * awailableSlidesToShow +
      (awailableSlidesToShow - 1) * digitsMarginRight
    }px`;
    sliderTrack.setAttribute("data-slides-per-view", `${maxSlidesPerView}`);
    if (awailableSlidesToShow >= slidesCount) {
      //slider arrows inactive
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
      // sliderTrack.setAttribute("data-transform", `${}`);
      // moveSliderFood(sliderTrack, slides[0], 1);
      for (let i = 0; i < awailableSlidesToShow; i++) {
        moveSliderFood(sliderTrack, slides[0], 1);
      }
      sliderTrack.setAttribute(
        "data-start-position",
        sliderTrack.getAttribute("data-transform")
      );
      const slidesWithCloneSlides = sliderTrack.querySelectorAll(
        `.${sliderConfig.sliderItemClass}`
      );
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
    const maxSlidesPerView = parseInt(
      sliderTrack.getAttribute("data-slides-per-view"),
      10
    );
    const countOfslides = sliderTrack.children.length;
    const shift = sliderItem.offsetWidth;
    const marginRight = getComputedStyle(sliderItem).marginRight;
    const digitsMarginRight = parseInt(marginRight.match(/\d+/), 10);
    let currentIndex = sliderTrack.getAttribute("data-transform");
    if (direction == -1) {
      // if (currentSlide == 0) {
      //   sliderTrack.style.transform = `translateX(${sliderTrack.getAttribute(
      //     "data-start-position"
      //   )}px)`;
      //   sliderTrack.setAttribute("data-transform", "1");
      //   sliderTrack.setAttribute("data-current-slide", "1");
      // }
      sliderTrack.style.transform = `translateX(${
        +currentIndex + (+shift + digitsMarginRight)
      }px)`;
      sliderTrack.setAttribute(
        "data-transform",
        +currentIndex + (+shift + digitsMarginRight)
      );
      sliderTrack.setAttribute("data-current-slide", `${currentSlide - 1}`);
    } else {
      const clonedSlides = 2;
      if (currentSlide == countOfslides - clonedSlides) {
      }

      sliderTrack.setAttribute(
        "data-transform",
        +currentIndex - (+shift + digitsMarginRight)
      );
      sliderTrack.setAttribute("data-current-slide", `${currentSlide + 1}`);
      sliderTrack.style.transform = `translateX(${
        +currentIndex - (+shift + digitsMarginRight)
      }px)`;
    }
  }
}

window.onload = function () {
  sliderFoodExampleInit({
    slider: foodExampleSlider,
    sliderTrack: foodExampleSliderInner,
    sliderItemClass: "food-example-goods__item",
    tryMaxSlidesPerView: 5,
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
};
