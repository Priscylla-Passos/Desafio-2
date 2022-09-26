const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

const botaoFechar = document.querySelector('.menu-lateral--fechar')

botaoMenu.addEventListener('click',() =>{
    menu.classList.toggle('menu-lateral--ativo')
})

botaoFechar.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})