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

// bid-form
function bidFormRadioState(radioBlock){
const radioProposal = radioBlock.querySelectorAll('.bid-form__radio-text');
for(let i = 0; i < radioProposal.length; i++){
    radioProposal[i].onclick = () =>{
        for(let j = 0; j < radioProposal.length; j++){
            const circleRadio = radioProposal[j].querySelector('.bid-form__input_radio-span'); 
            circleRadio.classList.remove('bid-form__input_radio-span-active');
        }
        const currentCircleRadio = radioProposal[i].querySelector('.bid-form__input_radio-span');
        currentCircleRadio.classList.add('bid-form__input_radio-span-active');
    }
}
}
const bidForm = document.querySelector('.bid-form');
const radioProposalInner = bidForm.querySelector('.bid-form__radio-inner-proposal');
const radioDeliveryInner = bidForm.querySelector('.bid-form__radio-inner-delivery');
bidFormRadioState(radioProposalInner);
bidFormRadioState(radioDeliveryInner);
