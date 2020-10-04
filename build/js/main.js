'use strict';

(function () {
  const reg = '[0-9]';
  const regText = '[a-zA-Zа-яА-Я]';
  const header = document.querySelector('.header');
  const menu = header.querySelector('.header__navigation');
  const menuBtn = header.querySelector('.header__menu-btn');

  const form = document.querySelector('.feedback');
  const nameInput = form.querySelector('#user-name');
  const telInput = form.querySelector('#user-tel');

  menu.classList.remove('header__navigation--no-js');

  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('header__navigation--opened');
  });

  nameInput.addEventListener('change', function () {
    if (nameInput.value.match(reg) !== null) {
      nameInput.setCustomValidity('Имя не может содержать цифры');
    } else {
      nameInput.setCustomValidity('');
    }
  });

  telInput.addEventListener('change', function () {
    if (telInput.value.match(regText) !== null) {
      telInput.setCustomValidity('Номер не может содержать буквы');
    } else {
      telInput.setCustomValidity('');
    }
  });

})();

