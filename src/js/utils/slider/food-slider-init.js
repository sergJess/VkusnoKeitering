import { moveSliderFood } from "./move-slider.js";
import { getGapValues } from "../get-gap-value/get-gap-value.js";
export function sliderFoodExampleInit(sliderConfig) {
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
