const mailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
mailMenu.addEventListener('click',toogleDesktopMenu);

function toogleDesktopMenu()
{
    desktopMenu.classList.toggle('inactive');
}