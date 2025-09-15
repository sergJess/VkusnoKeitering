import { moveSliderFood } from "./move-slider.js";
export function setSliderTransition(sliderTrack, className) {
  sliderTrack.classList.add(`${className}`);
}

export function sliderTransitionStart(sliderTrack) {
  sliderTrack.setAttribute("data-is-active-arrows", "false");
}
export function sliderTransitionEnd(sliderConfig) {
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
