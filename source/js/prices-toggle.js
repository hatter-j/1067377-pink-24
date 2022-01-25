const table = document.querySelector('.prices__table');

const toggle1 = document.querySelector('.slider__toggle--1');
const toggle2 = document.querySelector('.slider__toggle--2');
const toggle3 = document.querySelector('.slider__toggle--3');

let currentStep = 1;

const moveTable = (param) => {
  param === 'toggle2' ? currentStep-- : currentStep++;
  if (currentStep > 2) currentStep = 2;
  if (currentStep < 0) currentStep = 0;

  const getPercent = -33.3 * currentStep;
  table.style.transform = `translateX(${getPercent}%)`;
};

toggle1.addEventListener('click', () => moveTable());
toggle2.addEventListener('click', () => moveTable());
toggle3.addEventListener('click', () => moveTable());
