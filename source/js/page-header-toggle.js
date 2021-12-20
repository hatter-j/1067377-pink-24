var pageHeader = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');

navToggle.addEventListener('click', function() {
  pageHeader.classList.toggle('page-header--closed');
});
