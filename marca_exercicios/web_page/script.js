// const options = ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4', 'Opção 5', 'Opção 6', 'Opção 7', 'Opção 8', 'Opção 9', 'Opção 10'];

// const rouletteContainer = document.querySelector('.roulette-container');
// const rouletteOptions = document.querySelector('.roulette-options');

// options.forEach((option) => {
//   const rouletteOption = document.createElement('div');
//   rouletteOption.classList.add('roulette-option');
//   rouletteOption.textContent = option;
//   rouletteContainer.appendChild(rouletteOption);
// });

// let startTouchX = 0;
// let endTouchX = 0;
// let scrolling = false;

// rouletteContainer.addEventListener('touchstart', (event) => {
//   startTouchX = event.touches[0].clientX;
//   scrolling = true;
// });

// rouletteContainer.addEventListener('touchmove', (event) => {
//   if (!scrolling) {
//     return;
//   }

//   endTouchX = event.touches[0].clientX;

//   const diff = startTouchX - endTouchX;
//   rouletteContainer.scrollLeft += diff;

//   startTouchX = endTouchX;
// });

// rouletteContainer.addEventListener('touchend', () => {
//   scrolling = false;
// });