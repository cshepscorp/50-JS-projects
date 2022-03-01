const panels = document.querySelectorAll('.panel');
// adds all elements with class name panel to a NodeList

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

//console.log(panels);
function removeActiveClasses() {
  panels.forEach((panel) => panel.classList.remove('active'));
}
