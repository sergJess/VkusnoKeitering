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

//order-call-form
const crossOrderCallForm = document.getElementById('order-call-form-cross-id');
const orderCallForm = document.getElementById('order-call-form-block-id');
crossOrderCallForm.onclick = () => {}