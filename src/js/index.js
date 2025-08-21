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
function sliderFoodExampleInit(
  slider,
  sliderInner,
  sliderItemClass,
  slidesPerView
) {
  sliderInner.setAttribute("data-transform", "0");
  const slides = sliderInner.querySelectorAll(`.${sliderItemClass}`);
  const length = slides.length;
  if (length + 3 > slidesPerView && slidesPerView > 1) {
    const marginRight = getComputedStyle(slides[0]).marginRight;
    const digitsMarginRight = parseInt(marginRight.match(/\d+/), 10);
    slider.style.width = `${
      slides[0].clientWidth * slidesPerView +
      (slidesPerView - 1) * digitsMarginRight
    }px`;
  }
}
function moveSliderFood(sliderInner, sliderItem, direction) {
  const shift = sliderItem.offsetWidth;

  let currentIndex = sliderInner.getAttribute("data-transform");
  if (direction == -1) {
    sliderInner.style.transform = `translateX(${
      +currentIndex - (+shift + 45)
    }px)`;
    sliderInner.setAttribute("data-transform", +currentIndex - (+shift + 45));
  } else {
    sliderInner.style.transform = `translateX(${
      +currentIndex + (+shift + 45)
    }px)`;
    sliderInner.setAttribute("data-transform", +currentIndex + (+shift + 45));
  }
}

window.onload = function () {
  sliderFoodExampleInit(
    foodExampleSlider,
    foodExampleSliderInner,
    "food-example-goods__item",
    5
  );
  foodExampleArrowLeft.addEventListener(
    "click",
    moveSliderFood.bind(null, foodExampleSliderInner, foodExampleSliderItem, -1)
  );
  foodExampleArrowRight.addEventListener(
    "click",
    moveSliderFood.bind(null, foodExampleSliderInner, foodExampleSliderItem, 1)
  );
};
