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

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
links.forEach((icons) => icons.addEventListener('click', close));
