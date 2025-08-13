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
// order-call-form-2
const crossOrderCallForm2 = document.getElementById('order-call-form-cross-id2');
const orderCallForm2 = document.getElementById('order-call-form-block-id2');
const orderButton1 = document.getElementById('order-button-1');
const orderButton2 = document.getElementById('order-button-2');
crossOrderCallForm2.onclick = () => {
    orderCallForm2.classList.remove('order-call-form-block_show');
}
orderButton1.onclick = () => {
orderCallForm2.classList.add('order-call-form-block_show');
} 
orderButton2.onclick = () => {
orderCallForm2.classList.add('order-call-form-block_show');
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
const readyMadeSolutionsContent = readyMeadeSolutionsBlock.querySelector('.ready-made-solutions__content');
const readyMadeSolutionsImgInner = readyMeadeSolutionsBlock.querySelector('.ready-made-solutions__img-inner');
const readyMadeSolutionsTextTitleBlock = readyMeadeSolutionsBlock.querySelector('.ready-made-solutions__text-title-block');
const readyMadeSolutionsTextTitleBlockHeight = readyMadeSolutionsTextTitleBlock.clientHeight;
const readyMadeSolutionsImgInnerHeight = readyMadeSolutionsImgInner.clientHeight;
if(window.innerWidth > 860){
readyMadeSolutionsContent.style.backgroundImage = `linear-gradient(180deg, #423329 ${readyMadeSolutionsTextTitleBlockHeight - 8}px, #fff ${readyMeadeSolutionsBlock.clientHeight-readyMadeSolutionsTextTitleBlockHeight}px)`;
}
else{
    readyMadeSolutionsContent.style.backgroundImage = `linear-gradient(180deg, #423329 ${readyMadeSolutionsTextTitleBlockHeight + readyMadeSolutionsImgInnerHeight - 5}px, #fff ${readyMeadeSolutionsBlock.clientHeight-readyMadeSolutionsTextTitleBlockHeight - readyMadeSolutionsImgInnerHeight}px)`;
}