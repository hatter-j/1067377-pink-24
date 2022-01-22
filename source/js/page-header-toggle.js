var pageHeader = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {
  if (pageHeader.classlist.contains("page-header--closed")) {
    pageHeader.classList.remove("page-header--closed");
    pageHeader.classList.add("page-header--opened");
  } else {
    pageHeader.classList.add("page-header--closed");
    pageHeader.classlist.remove("page-heder--opened");
  }
});
