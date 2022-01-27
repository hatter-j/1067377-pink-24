const table = document.querySelector('.prices__table');

const toggle1 = document.querySelector('.slider__toggle--1');
const toggle2 = document.querySelector('.slider__toggle--2');
const toggle3 = document.querySelector('.slider__toggle--3');

toggle1.addEventListener('click', function () {
  toggle2.classList.remove('slider__toggle--current');
  toggle3.classList.remove('slider__toggle--current');
  toggle1.classList.add('slider__toggle--current');

  table.classList.remove('prices__table--state-2');
  table.classList.remove('prices__table--state-3');
  table.classList.add('prices__table--state-1');
});

toggle2.addEventListener('click', function () {
  toggle1.classList.remove('slider__toggle--current');
  toggle3.classList.remove('slider__toggle--current');
  toggle2.classList.add('slider__toggle--current');

  table.classList.remove('prices__table--state-1');
  table.classList.remove('prices__table--state-3');
  table.classList.add('prices__table--state-2');
});

toggle3.addEventListener('click', function () {
  toggle1.classList.remove('slider__toggle--current');
  toggle2.classList.remove('slider__toggle--current');
  toggle3.classList.add('slider__toggle--current');

  table.classList.remove('prices__table--state-1');
  table.classList.remove('prices__table--state-2');
  table.classList.add('prices__table--state-3');
});
