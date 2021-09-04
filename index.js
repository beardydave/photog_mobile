const nav = document.querySelector('nav');
const menu = document.querySelector('.menu__icon');
const navLinks = document.querySelectorAll('.nav__link');

menu.addEventListener('click', () => menu.classList.toggle('menu__close'));

menu.addEventListener('click', () => nav.classList.toggle('hide'));

navLinks.forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.add('hide');
    menu.classList.remove('menu__close');
  })
);
