import { sliderFoodExampleInit } from "./food-slider-init.js";
import { moveSliderFood } from "./move-slider.js";
import {
  setSliderTransition,
  sliderTransitionStart,
  sliderTransitionEnd,
} from "./slider-transition.js";
import {
  classListsRemove,
  classListsAdd,
} from "../class-lists-add-remove/class-lists-add-remove.js";
export function setPopUpForSliderPopUp(config) {
  const popup = config.popup;
  const sliderBlockContent = config.sliderBlockContent;
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
  const popUpSliderTrackClass = config.popUpSliderTrackClass;
  const popUpSliderTrackParentClass = config.popUpSliderTrackParentClass;
  const slides = sliderTrack.querySelectorAll(`.${classToSelectOriginSlides}`);
  const popupItemsInfoArray = config.popupItemsInfoArray;
  for (let i = 0, length = slides.length; i < length; i++) {
    // set click on every slider item to create slider popup
    slides[i].onclick = () => {
      const slidesWithoutClones = parseInt(
        sliderTrack.getAttribute(`${dataAttributeAllSlidesWithoutClones}`),
        10
      );
      const popUpSliderTrackParent = document.createElement("div");
      popUpSliderTrackParent.classList.add(popUpSliderTrackParentClass);
      const popupSliderTrack = document.createElement("div");
      for (let j = 0; j < slidesWithoutClones; j++) {
        const cloneNode = sliderTrack
          .querySelector(
            `[${dataAttributeForSearchSlidesWithoutClones}="${j}"]`
          )
          .cloneNode(true);
        popupSliderTrack.classList.add(popUpSliderTrackClass);
        cloneNode.classList.add(contentItemClass);
        popupSliderTrack.appendChild(cloneNode);
        popUpSliderTrackParent.appendChild(popupSliderTrack);
        sliderBlockContent.appendChild(popUpSliderTrackParent);
      }
      popup.classList.add(popupClassOpen);
      // wait when browser will render the nodes
      requestAnimationFrame(() => {
        // set classes for nodes in slider popup item if nessesary
        const slidesOfPopUpSliderTrack = popupSliderTrack.querySelectorAll(
          `.${slidesPopupClass}`
        );
        for (let i = 0; i < slidesOfPopUpSliderTrack.length; i++) {
          for (let j = 0; j < popupItemsInfoArray.length; j++) {
            const element = slidesOfPopUpSliderTrack[i].querySelector(
              `${popupItemsInfoArray[j].elementQuerySelector}`
            );
            if (element) {
              if (popupItemsInfoArray[j].hasOwnProperty("elementClassRemove")) {
                classListsRemove(
                  element,
                  popupItemsInfoArray[j].elementClassRemove
                );
              }
              if (popupItemsInfoArray[j].hasOwnProperty("elementClassAdd")) {
                classListsAdd(element, popupItemsInfoArray[j].elementClassAdd);
              }
            }
          }
          if (config.hasOwnProperty("popupItemClassRemove")) {
            classListsRemove(
              slidesOfPopUpSliderTrack[i],
              config.popupItemClassRemove
            );
          }
          if (config.hasOwnProperty("popupItemClassAdd")) {
            classListsAdd(
              slidesOfPopUpSliderTrack[i],
              config.popupItemClassAdd
            );
          }
        }
        sliderFoodExampleInit({
          sliderTrack: popupSliderTrack,
          sliderItemClass: contentItemClass,
          tryMaxSlidesPerView: tryMaxSlidesPerView,
          sliderArrowsInnerClass: `${sliderArrowsInnerClass}`,
          sliderArrowsInnerClassInactive: `${sliderArrowsInnerClassInactive}`,
          leftArrow: arrowLeft,
          mobileGridWindowWidth: 0,
          sliderTransitionClass: popupSliderTrackClassTransition,
        });
        setSliderToCorrectPositionInPopUp({
          sliderItemClass: contentItemClass,
          sliderTrack: popupSliderTrack,
          clickedSlide: slides[i],
        });

        const arrowLeftClick = moveSliderFood.bind(
          null,
          popupSliderTrack,
          popupSliderTrack.querySelector(`.${contentItemClass}`),
          -1
        );
        arrowLeft.addEventListener("click", arrowLeftClick);
        const arrowRightClick = moveSliderFood.bind(
          null,
          popupSliderTrack,
          popupSliderTrack.querySelector(`.${contentItemClass}`),
          1
        );
        arrowRight.addEventListener("click", arrowRightClick);
      });
      const popupSliderTrackTransitionStart = sliderTransitionStart.bind(
        null,
        popupSliderTrack
      );
      popupSliderTrack.addEventListener(
        "transitionstart",
        popupSliderTrackTransitionStart
      );
      const popupSliderTrackTransitionEnd = sliderTransitionEnd.bind(null, {
        sliderItem: popupSliderTrack.querySelector(`.${contentItemClass}`),
        sliderTrack: popupSliderTrack,
        arrowLeft: arrowLeft,
        arrowRight: arrowRight,
        arrowClassInactive: `${sliderArrowsInnerClassInactive}`,
        sliderTrackClassTransition: `${popupSliderTrackClassTransition}`,
      });
      popupSliderTrack.addEventListener(
        "transitionend",
        popupSliderTrackTransitionEnd
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
      // setTimeout(() => {
      //   setSliderTransition(
      //     popupSliderTrack,
      //     `${popupSliderTrackClassTransition}`
      //   );
      // }, 10);
    };
  }
}
// close slider popup
export function closeSliderPopup(config) {
  const popUpSlider = config.popUpSlider;
  const classPopUpSliderOpen = config.classPopUpSliderOpen;
  const popUpSliderContentBlock = config.popUpSliderContentBlock;
  popUpSlider.classList.remove(classPopUpSliderOpen);
  popUpSliderContentBlock.innerHTML = "";
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
