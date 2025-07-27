// menu
const burger = document.querySelector('.navigation-burger');
burger.onclick = ()=>{
    const mobileMenu = document.querySelector('.header__block-nav');
    mobileMenu.classList.add('header__block-nav_open');
}
const cross = document.querySelector('.navigation-cross__click');
cross.onclick = () => {
    const mobileMenu = document.querySelector('.header__block-nav');
    mobileMenu.classList.remove('header__block-nav_open');
}
// order

const buttonsResumeOrders = document.querySelectorAll('.vacancy__button');
console.log(buttonsResumeOrders)
const resumeFormCross = document.querySelector('.form-resume__cross');
for(let i = 0; i < buttonsResumeOrders.length; i++){
buttonsResumeOrders[i].onclick = () => {
    const resumeForm = document.querySelector('.form-resume-inner');
    resumeForm.classList.add('form-resume__opened');
}
}
resumeFormCross.onclick = () => {
    const resumeForm = document.querySelector('.form-resume-inner');
    resumeForm.classList.remove('form-resume__opened');
}