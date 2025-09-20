export function setReadyMadeSolutionsLinearGradient(contentInnerBlock, color) {
  const contentBlockHeight = contentInnerBlock.clientHeight;
  const imgInnerHeigh = contentInnerBlock.querySelector(
    ".ready-made-solutions__img-inner"
  ).clientHeight;
  const textInnerHeight = contentInnerBlock.querySelector(
    ".ready-made-solutions__text-title-block"
  ).clientHeight;
  if (window.innerWidth > 860) {
    contentInnerBlock.style.backgroundImage = `linear-gradient(180deg, ${color} ${
      textInnerHeight - 8
    }px, #fff ${contentBlockHeight - textInnerHeight}px)`;
  } else {
    contentInnerBlock.style.backgroundImage = `linear-gradient(180deg, ${color} ${
      textInnerHeight + imgInnerHeigh - 5
    }px, #fff ${contentBlockHeight - textInnerHeight - imgInnerHeigh}px)`;
  }
}
