export function getGapValues(element) {
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
