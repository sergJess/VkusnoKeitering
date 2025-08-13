const header = document.getElementById('header-id');
//menu
const burger = header.querySelector('.navigation-burger');
burger.onclick = ()=>{
    const mobileMenu = header.querySelector('.header__block-nav');
    mobileMenu.classList.add('header__block-nav_open');
}
const cross = header.querySelector('.navigation-cross__click');
cross.onclick = () => {
    const mobileMenu = header.querySelector('.header__block-nav');
    mobileMenu.classList.remove('header__block-nav_open');
}

//order-call-form
const orderCallButtons = header.querySelectorAll('.order-call-button_btn');
const crossOrderCallForm = document.getElementById('order-call-form-cross-id');
const orderCallForm = document.getElementById('order-call-form-block-id');
crossOrderCallForm.onclick = () => {
     orderCallForm.classList.remove('order-call-form-block_show');
}
for(let i = 0, length = orderCallButtons.length; i < length; i++){
    orderCallButtons[i].onclick = () => {
        orderCallForm.classList.add('order-call-form-block_show');
    }
}
// navigation show submenu
const navigationLists = header.querySelectorAll('.navigation__list');
for(let i = 0, length = navigationLists.length; i < length; i++){
navigationLists[i].onclick = () => {
    const navigationSubmenu = navigationLists[i].nextElementSibling;
    if(navigationSubmenu) navigationSubmenu.classList.toggle('navigation__submenu_show');
}
}
//height in ready made solutions block linear-gradient
const readyMeadeSolutionsBlock = document.getElementById('ready-made-solutions-id');
function setReadyMadeSolutionsLinearGradient(
    contentInnerBlock, color
){
const contentBlockHeight = contentInnerBlock.clientHeight;
const imgInnerHeigh = contentInnerBlock.querySelector('.ready-made-solutions__img-inner').clientHeight;
const textInnerHeight = contentInnerBlock.querySelector('.ready-made-solutions__text-title-block').clientHeight;
if(window.innerWidth > 860){
contentInnerBlock.style.backgroundImage = `linear-gradient(180deg, ${color} ${textInnerHeight - 8}px, #fff ${contentBlockHeight - textInnerHeight}px)`;
}
else{
    contentInnerBlock.style.backgroundImage = `linear-gradient(180deg, ${color} ${textInnerHeight + imgInnerHeigh - 5}px, #fff ${contentBlockHeight - textInnerHeight - imgInnerHeigh}px)`;
}
}
const readyMadeSolutionsContent = readyMeadeSolutionsBlock.querySelector('.ready-made-solutions__content');
setReadyMadeSolutionsLinearGradient(readyMadeSolutionsContent,'#C76A6A');