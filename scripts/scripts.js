const menuEmail = document.querySelector('.navbar-email');
const dektopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')


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

//Cart container
const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: '"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"'
});

productList.push({
    name:'Television',
    price: 320,
    image: '"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"'
});

productList.push({
    name:'Computadora',
    price: 620,
    image: '"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"'
});


for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const img = document.createElement('img');
    img.setAttribute('src',product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;    
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    img.setAttribute('src','././icons/bt_add_to_cart.svg')

    product.productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImgCart);
    productCard.appendChild(productInfo);
    
    cardsContainer.appendChild(productCard);
}