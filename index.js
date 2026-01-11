const navList = document.querySelector('nav ul');
const openMenu = document.querySelector('nav .fa-bars');
const closeMenu = document.querySelector('nav .fa-xmark');

openMenu.addEventListener('click', () => {
    navList.classList.add('nav-active');
});

closeMenu.addEventListener('click', () => {
    navList.classList.remove('nav-active');
});
