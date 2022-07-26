const mailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIconMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
const cartIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

mailMenu.addEventListener('click',toggleDesktopMenu);
menuIconMobile.addEventListener('click',toggleMobileMenu);
cartIcon.addEventListener('click',toggleCartMenu)

function toggleDesktopMenu()
{
    desktopMenu.classList.toggle('inactive');
    if (!productDetail.classList.toggle('inactive'))
    {
        productDetail.classList.add('inactive');
    }
}

function toggleMobileMenu()
{
    mobileMenu.classList.toggle('inactive');
    if (!productDetail.classList.toggle('inactive'))
    {
        productDetail.classList.add('inactive');
    }
}

function toggleCartMenu(){
    productDetail.classList.toggle('inactive');

    if (!mobileMenu.classList.contains('inactive'))
    {
        mobileMenu.classList.add('inactive');
    }
    if (!desktopMenu.classList.contains('inactive'))
    {
        desktopMenu.classList.add('inactive');
    }
}