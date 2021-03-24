const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const links = document.querySelectorAll('.secIcon');
const loader = document.querySelector('.loader');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-200%';
}

function loading() {
  loader.parentElement.removeChild(loader);
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
loader.addEventListener('load', loading);
links.forEach((icons) => icons.addEventListener('click', close));
