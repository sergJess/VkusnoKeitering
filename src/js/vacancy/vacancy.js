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
// order
const vacancyList = document.getElementById('vacancy-id');
const buttonsResumeOrders = vacancyList.querySelectorAll('.vacancy__button');
const resumeForm = document.getElementById('form-resume-inner-id');
const resumeFormCross = resumeForm.querySelector('.form-resume__cross');
for(let i = 0; i < buttonsResumeOrders.length; i++){
buttonsResumeOrders[i].onclick = () => {
    resumeForm.classList.add('form-resume__opened');
}
}
resumeFormCross.onclick = () => {
    resumeForm.classList.remove('form-resume__opened');
}