'use strict';
(function () {
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var phoneMask = document.querySelector('#phoneMask');

  navMain.classList.remove('main-nav--nojs');

  var setListener = function (element, type, handler) {
    if (!element) {
      return;
    }
    element.addEventListener(type, handler);
  };

  setListener(navToggle, 'click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  // eslint-disable-next-line no-undef
  var inputMask = new Inputmask({'mask': '8(999)999-99-99'});
  inputMask.mask(phoneMask);
})();
