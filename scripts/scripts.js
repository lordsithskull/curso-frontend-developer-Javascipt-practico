const menuEmail = document.querySelector('.navbar-email');
const dektopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');



menuEmail.addEventListener('click',toggleDesktopMenu)
menuHamIcon.addEventListener('click',toggleMobileMenu)
menuCarritoIcon.addEventListener('click',toggleCarritoAside)

/*funciones de menu*/
function toggleDesktopMenu () {
    const isCarritoAside = aside.classList.contains ('inactive');
    //cerrar otro menu
    if (!isCarritoAside) {
        aside.classList.add('inactive');
    }
    
    dektopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    const isCarritoAside = aside.classList.contains ('inactive');
    //cerrar otro menu
    if (!isCarritoAside) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains ('inactive');
    const isDektopMenu = dektopMenu.classList.contains ('inactive');
    //cerrar otro menu
    if (!isMobileMenuClosed || isDektopMenu) {
        mobileMenu.classList.add('inactive');
    }

    dektopMenu.classList.toggle('inactive'); 
    aside.classList.toggle('inactive'); 
}

