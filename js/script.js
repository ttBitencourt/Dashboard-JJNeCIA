let wrapper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});



let btnPopup = document.querySelector('.btnLogin-popup');
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

let iconClose = document.querySelector('.icon-close');
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
