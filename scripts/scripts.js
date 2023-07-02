const menuEmail = document.querySelector('.navbar-email');
const dektopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartDetail = document.querySelector('#shoppingCartDetail');
const cardsContainer = document.querySelector('.cards-container');
const infoWindows = document.querySelector('#infoWindow');
const infoWindowsClose = document.querySelector('.infoWindow-close');

menuEmail.addEventListener('click',toggleDesktopMenu)
menuHamIcon.addEventListener('click',toggleMobileMenu)
menuCarritoIcon.addEventListener('click',toggleCarritoAside)
infoWindowsClose.addEventListener('click',toggleInfoWindowsClose)

/*funciones de menu*/
function toggleDesktopMenu () {
    const isCarritoAside = shoppingCartDetail.classList.contains ('inactive');
    const isInfoWindows = infoWindows.classList.contains ('inactive');
    //cerrar otro menu
    if (!isCarritoAside) {
        shoppingCartDetail.classList.add('inactive');
    }
    
    dektopMenu.classList.toggle('inactive');

     if (!isInfoWindows) {
        toggleInfoWindowsClose ();
     }    
    

}

function toggleMobileMenu () {
    const isCarritoAside = shoppingCartDetail.classList.contains ('inactive');
    const isInfoWindows = infoWindows.classList.contains ('inactive');
    //cerrar otro menu
    if (!isCarritoAside) {
        shoppingCartDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

    dektopMenu.classList.toggle('inactive');

    if (!isInfoWindows) {
       toggleInfoWindowsClose ();
    }   
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains ('inactive');
     
    //cerrar otro menu
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    dektopMenu.classList.toggle('inactive'); 
    shoppingCartDetail.classList.toggle('inactive'); 
    toggleInfoWindowsClose ();
}


function productImageOpen () {
    dektopMenu.classList.add('inactive');    
    mobileMenu.classList.add ('inactive');
    shoppingCartDetail.classList.add('inactive'); 
    infoWindows.classList.remove('inactive');
        
}

function toggleInfoWindowsClose () {
        infoWindows.classList.add('inactive');   
}

//Cart container
const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'Television',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


//Funcion para generar Productos
function renderProducts(array) {

    for (product of array) {
        const productCard =  document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click',productImageOpen)
    
        const productInfo =  document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv =  document.createElement('div');
        
        const productPrice =  document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
    
        const productName =  document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);    
    }
}

renderProducts(productList);