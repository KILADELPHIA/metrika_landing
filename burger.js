const MY_BURGER_OPENED_CLASSNAME = 'burger__open';
const MY_BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';
const MY_BODY_FIXED_CLASSNAME = 'body_fixed';

const burgerbodyNode = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger__content');

console.log('bodyNode:', burgerbodyNode);
console.log('burgerNode:', burgerNode);
console.log('burgerBtnNode:', burgerBtnNode);
console.log('burgerContentNode:', burgerContentNode);

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode);
    if (isClickOutsideContent) {
        toggleBurger();
    }
});

function toggleBurger() {
    console.log('toggleBurger called');
    burgerNode.classList.toggle(MY_BURGER_OPENED_CLASSNAME);
    burgerbodyNode.classList.toggle(MY_BODY_FIXED_CLASSNAME);
    burgerBtnNode.classList.toggle(MY_BURGER_BTN_OPENED_CLASSNAME);
}
