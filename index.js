const mailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIconMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
const cartIcon = document.querySelector('.navbar-shopping-cart');
const productContainer = document.querySelector('#cartContainer');
const cardContainer = document.querySelector('.cards-container');

mailMenu.addEventListener('click',toggleDesktopMenu);
menuIconMobile.addEventListener('click',toggleMobileMenu);
cartIcon.addEventListener('click',toggleCartMenu)

function toggleDesktopMenu()
{
    desktopMenu.classList.toggle('inactive');
    if (!productContainer.classList.toggle('inactive'))
    {
        productContainer.classList.add('inactive');
    }
}

function toggleMobileMenu()
{
    mobileMenu.classList.toggle('inactive');
    if (!productContainer.classList.toggle('inactive'))
    {
        productContainer.classList.add('inactive');
    }
}

function toggleCartMenu(){
    productContainer.classList.toggle('inactive');

    if (!mobileMenu.classList.contains('inactive'))
    {
        mobileMenu.classList.add('inactive');
    }
    if (!desktopMenu.classList.contains('inactive'))
    {
        desktopMenu.classList.add('inactive');
    }
}

const productList =[];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computadora',
    price: 1200,
    image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/4E16/production/_110109991_gettyimages-1147877086.jpg',
});
productList.push({
    name: 'Auto',
    price: 20000,
    image: 'https://cdn.aarp.net/content/dam/aarp/auto/2017/07/1140-hyundai-ioniq-great-cars-road-trips-esp.imgcache.revfd63981c76a67e8a4ed28622bb76883e.web.900.513.jpg',
});
productList.push({
    name: 'Moto',
    price: 5000,
    image: 'https://lamoto.com.ar/wp-content/uploads/2022/01/Moto-electrica-Damon-HyperFighter-amarilla.jpg',
});
productList.push({
    name: 'Guchesan',
    price: 2,
    image: 'https://images.aws.nestle.recipes/resized/b62714c9e895e830c1a33eb2e8658d07_sanguche_1200_600.jpg',
});

function renderProduct(array){
    for(product of array)
{
    const productCard = document.createElement('div');
    productCard.classList.add('product-card'); 

    const img = document.createElement('img');
    img.setAttribute('src', product.image); 
    productCard.appendChild(img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productCard.appendChild(productInfo);

    const divR = document.createElement('div');
    productInfo.appendChild(divR);

    const productPrice = document.createElement('p');
    productPrice.innerText = `$ ${product.price}`;
    divR.appendChild(productPrice);

    const productName = document.createElement('p');
    productName.innerText = product.name;
    divR.appendChild(productName);

    const productFigure = document.createElement('figure');
    productInfo.appendChild(productFigure);


    const img2 = document.createElement('img');
    img2.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.appendChild(img2);

    cardContainer.appendChild(productCard);

}
}

renderProduct(productList);