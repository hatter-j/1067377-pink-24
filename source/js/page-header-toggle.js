var pageHeader = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {
    pageHeader.classList.toggle('page-heder--opened');
});
