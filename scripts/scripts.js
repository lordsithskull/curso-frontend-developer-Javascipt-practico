const menuEmail = document.querySelector('.navbar-email');
const dektopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggleDesktopMenu)

function toggleDesktopMenu () {
    dektopMenu.classList.toggle('inactive');
}
