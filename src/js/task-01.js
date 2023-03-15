
const categoriesItemEl = document.querySelectorAll('.item');
console.group('Number of categories:', categoriesItemEl.length);

categoriesItemEl.forEach(item => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
})

console.groupEnd();