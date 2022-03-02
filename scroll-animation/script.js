const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  // where do we want our trigger points?
  // want trigger point to be a little less than height...
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const boxTopEdge = box.getBoundingClientRect().top;

    if (boxTopEdge < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
