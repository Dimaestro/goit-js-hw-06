function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColorEl = document.querySelector('.change-color');
const colorOutputEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btnChangeColorEl.addEventListener('click', () => onFillColorBody(getRandomHexColor));

function onFillColorBody(randomColor) {
  const hexColor = randomColor()
  bodyEl.style.backgroundColor = hexColor;
  colorOutputEl.textContent = hexColor;
}