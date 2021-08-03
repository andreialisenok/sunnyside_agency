import './import/_layout';
import './import/_components';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-mobile');
burger.addEventListener('click', () => {
  burger.classList.contains('active') ? burger.classList.remove('active') : burger.classList.add('active');
  menu.classList.contains('active') ? menu.classList.remove('active') : menu.classList.add('active');
});
