const elements = {
  controls: document.querySelector('#controls'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

let sizeMin = 30;

elements.btnCreate.addEventListener('click', () => {
  createBoxes(elements.controls.firstElementChild.value);
  sizeMin = Number.parseInt(elements.boxes.lastElementChild.style.width) + 10;
});

elements.btnDestroy.addEventListener('click', () => {
  destroyBoxes();
  sizeMin = 30;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function createBoxes(amount) {
  const arrBoxEl = [];
  for (let i = 0; i < amount; i++) {
    const divBoxEl = document.createElement('div');
    divBoxEl.style.width = `${sizeMin + (i * 10)}px`;
    divBoxEl.style.height = `${sizeMin + (i * 10)}px`;
    divBoxEl.style.backgroundColor = getRandomHexColor();
    arrBoxEl.push(divBoxEl);
  }
  elements.boxes.append(...arrBoxEl);
};

function destroyBoxes() {
  elements.boxes.innerHTML = '';
}
