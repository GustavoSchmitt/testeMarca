const theme = document.querySelector('#theme');
const size = document.querySelector('#size');
const body = document.querySelector('body');

theme.addEventListener('click', () => {
  body.classList.toggle('dark');
});

size.addEventListener('click', () => {
    body.classList.toggle('large');
});
