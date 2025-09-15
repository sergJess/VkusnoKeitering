import { getGapValues } from "../get-gap-value/get-gap-value.js";
export function moveSliderFood(sliderTrack, sliderItem, direction) {
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
