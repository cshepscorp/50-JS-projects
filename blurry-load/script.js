const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring, 30); // 30 ms

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  console.log(load);
  loadText.innerText = `${load}%`;
  // map 0-100 to 0-1
  // how do we get from 1 to 0 for this opacity setting?
  // to get the loading percentage to fade out
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
