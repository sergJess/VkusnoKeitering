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
setReadyMadeSolutionsLinearGradient(readyMadeSolutionsContent,'#423329');
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
const readyMadeSolutionsButtons = readyMeadeSolutionsBlock.querySelectorAll('.ready-made-solutions__tabs-button');
for(let i = 0, length = readyMadeSolutionsButtons.length; i < length; i++){
    readyMadeSolutionsButtons[i].onclick = () =>{
        for(let j = 0; j < length; j++){
            if(readyMadeSolutionsButtons[j].classList.contains('ready-made-solutions__tabs-button_active')){
                const attribute = readyMadeSolutionsButtons[j].getAttribute('data-ready-made-solutions-tab');
                readyMeadeSolutionsBlock.querySelector(`.${attribute}`).classList.add('ready-made-solutions__content_hidden');
                readyMadeSolutionsButtons[j].classList.remove('ready-made-solutions__tabs-button_active');
            }
}
const attribute = readyMadeSolutionsButtons[i].getAttribute('data-ready-made-solutions-tab');
const readyMadeSolutionsContentBlock = readyMeadeSolutionsBlock.querySelector(`.${attribute}`);
if(readyMadeSolutionsContentBlock){
switch(attribute){
case 'ready-made-solutions__content_coffee-break':
    setReadyMadeSolutionsLinearGradient(readyMadeSolutionsContentBlock,'#423329');
    break;
case 'ready-made-solutions__content_outdoor-bars': 
     setReadyMadeSolutionsLinearGradient(readyMadeSolutionsContentBlock,'#292E42');
     break; 
case 'ready-made-solutions__content_furshet': 
     setReadyMadeSolutionsLinearGradient(readyMadeSolutionsContentBlock,'#698155');
     break;
case 'ready-made-solutions__content_bankets': 
     setReadyMadeSolutionsLinearGradient(readyMadeSolutionsContentBlock,'#557A81');
     break;
case 'ready-made-solutions__content_gala': 
     setReadyMadeSolutionsLinearGradient(readyMadeSolutionsContentBlock,'#3B4249');
     break;
case 'ready-made-solutions__content_child-keitering': 
     setReadyMadeSolutionsLinearGradient(readyMadeSolutionsContentBlock,'#C76A6A');
     break;
 
}
readyMadeSolutionsContentBlock.classList.remove('ready-made-solutions__content_hidden');
readyMadeSolutionsButtons[i].classList.add('ready-made-solutions__tabs-button_active');
}
    }
}
