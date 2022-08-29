const burger = document.querySelector('.burger');
const burgerMenu = document.getElementById('burger-menu');
const body = document.getElementsByTagName('body')[0];
const burgerMenuBackground = document.getElementById('burger-menu-background');
const burgerMenuItems = document.querySelectorAll('.header-menu__item_burger');

burger.addEventListener('click', e =>{
    if(e.target.classList.contains('burger')){
        e.target.classList.toggle('burger_active');
        burgerMenu.classList.toggle('burger-menu_active');
        body.classList.toggle('plug');
        burgerMenuBackground.classList.toggle('burger-menu-background_active');
    }
    else if (e.target.classList.contains('burger-line')){
        e.target.parentNode.classList.toggle('burger_active');
        burgerMenu.classList.toggle('burger-menu_active');
        body.classList.toggle('plug');
        burgerMenuBackground.classList.toggle('burger-menu-background_active');
    }
});

burgerMenuBackground.addEventListener('click', e =>{
    burger.classList.toggle('burger_active');
    burgerMenu.classList.toggle('burger-menu_active');
    body.classList.toggle('plug');
    e.target.classList.toggle('burger-menu-background_active');
});

burgerMenuItems.forEach(item =>{
    item.addEventListener('click',e =>{
        burger.classList.toggle('burger_active');
        burgerMenu.classList.toggle('burger-menu_active');
        body.classList.toggle('plug');
        burgerMenuBackground.classList.toggle('burger-menu-background_active');
    })
})

if(burger.style.display === 'none'){
    body.classList.remove('plug');
}