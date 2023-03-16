const menuEmail = document.querySelector('.navbar-email');
const dektopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggleDesktopMenu)
menuHamIcon.addEventListener('click',toggleMobileMenu)

function toggleDesktopMenu () {
    dektopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive');
}

