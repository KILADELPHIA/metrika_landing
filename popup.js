const POPUP_OPENED_CLASSNAME = 'popup__open';
const BODY_FIXED_CLASSNAME = 'body_fixed';

const bodyNode = document.querySelector('body');
const popupNode = document.querySelector('.js-popup');
const btnOpenNode = document.querySelector('.js-btn');
const popupContentNode = document.querySelector('.popup__content'); // обновлено, чтобы соответствовать вашему CSS
const btnCloseNode = document.querySelector('.js-popup__close-btn');

btnOpenNode.addEventListener('click', togglePopup);
btnCloseNode.addEventListener('click', (event) => {
    event.stopPropagation(); // предотвращает распространение события
    togglePopup();
});

popupNode.addEventListener('click', (event) => {
    const isClickInsideContent = event.composedPath().includes(popupContentNode);
    if (!isClickInsideContent) {
        togglePopup();
    }
});

function togglePopup() {
    popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}
