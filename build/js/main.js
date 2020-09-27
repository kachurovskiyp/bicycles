'use strict';

(function () {
  const header = document.querySelector('.header');
  const menu = header.querySelector('.header__navigation');
  const menuBtn = header.querySelector('.header__menu-btn');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('header__navigation--opened');
  })
})();
