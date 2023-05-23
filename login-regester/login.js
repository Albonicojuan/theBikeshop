const conteiner = document.querySelector('.conteiner');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLogin = document.querySelector('loginnav');

registerLink.addEventListener('click', ()=> {
    conteiner.classList.add('active')
});

loginLink.addEventListener('click', ()=> {
    conteiner.classList.remove('active')
});

btnLogin.addEventListener('click', ()=> {
    conteiner.classList.remove('active-poup')
});