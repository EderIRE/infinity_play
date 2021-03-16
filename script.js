const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const links = document.querySelectorAll('.secIcon');

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

anime({
  targets: '.player1',
  translateX: 750,
  rotate: 50,
  direction: 'normal',
  autoplay: true,
  easing: 'easeInOutSine',
});

anime({
  targets: '.player2',
  translateX: 850,
  rotate: 50,
  direction: 'normal',
  autoplay: true,
  easing: 'easeInOutSine',
});

anime({
  targets: '.player3',
  translateX: -750,
  rotate: -50,
  direction: 'normal',
  autoplay: true,
  easing: 'easeInOutSine',
});

anime({
  targets: '.player4',
  translateX: -850,
  rotate: -50,
  direction: 'normal',
  autoplay: true,
  easing: 'easeInOutSine',
});

AOS.init();
