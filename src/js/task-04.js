let counterValue = 0;

const counterBtnDecrementEl = document.querySelector('[data-action="decrement"]');
const counterBtnIncrementEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

counterBtnDecrementEl.addEventListener('click', () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});

counterBtnIncrementEl.addEventListener('click', () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});