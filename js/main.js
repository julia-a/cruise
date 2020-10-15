'use strict';
(function () {
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  var setListener = (element, type, handler) => {
    if (!element) {
      return;
    }
    element.addEventListener(type, handler);
    return () => {
      element.remoteEventListener(type, handler);
    };
  }

  setListener(navToggle, 'click', () => {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
})();
