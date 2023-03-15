const inputFontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputFontSizeControlEl.addEventListener('input', onFontSizeControl);

function onFontSizeControl(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}