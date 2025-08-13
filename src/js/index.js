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
//scroll to anchors
    function isNodeOrParent(target) {
        let anchor = target;
        if (target.parentNode.classList.contains('scrollTo')) {
            anchor = target.parentNode;
            return anchor
        }
        return anchor;
    }
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('scrollTo') || e.target.parentNode.classList.contains('scrollTo')) {
            e.preventDefault();
            const scrollSpeed = 0.7;
            let windowOffSetY = window.pageYOffset;
            let anchorElement = isNodeOrParent(e.target).getAttribute('href').replace('#', '');
            let toScrollElelement = document.getElementById(anchorElement);
            let topCoordsOftoScrollElelement = toScrollElelement.getBoundingClientRect().top;
            let start = null;
            requestAnimationFrame(step);

            function step(time) {
                if (start === null) start = time;
                let progress = time - start;
                let windowCoordsToScrollY = (topCoordsOftoScrollElelement < 0) ? Math.max(windowOffSetY - progress / scrollSpeed, windowOffSetY + topCoordsOftoScrollElelement) : Math.min(windowOffSetY + progress / scrollSpeed, windowOffSetY + topCoordsOftoScrollElelement);
                window.scrollTo(0, windowCoordsToScrollY);
                if (windowCoordsToScrollY != windowOffSetY + topCoordsOftoScrollElelement) {
                    requestAnimationFrame(step);
                }

            }
        }
    });
