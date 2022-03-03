const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  label.innerHTML = label.innerText // get innertext of the label
    .split('') // break it apart into an array of letters
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    ) // map through each letter and turn it into it's own span
    .join(''); // join the spanned letters
});
