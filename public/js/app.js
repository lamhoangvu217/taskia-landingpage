const sr = ScrollReveal()
sr.reveal('.subheader__title h1', {
    reset:true,
    duration: 1000,
    origin: 'bottom',
    distance: '50px'
})
sr.reveal('.subheader__title h6', {
    reset:true,
    duration: 1000,
    origin: 'top',
    distance: '50px'
})
sr.reveal('.subheader__title p', {
    reset:true,
    duration: 1000,
    origin: 'bottom',
    distance: '50px'
})
sr.reveal('.banner', {
    reset:true,
    duration: 2000,
    origin: 'bottom',
    distance: '50px'
}, 1000)
sr.reveal('.subheader__button .playstore', {
    reset:true,
    duration: 1000,
    origin: 'left',
    distance: '50px'
})
sr.reveal('.subheader__button .appstore', {
    reset:true,
    duration: 1000,
    origin: 'right',
    distance: '50px'
})



// MENU BURGER
const menu_icon = document.querySelector('.menu__icon');
const list_menu = document.querySelector('.header__menu');

menu_icon.addEventListener('click', () => {
    if(list_menu.classList.contains('hidden')){
        list_menu.classList.remove('hidden');
    } else {
        list_menu.classList.add('hidden');
    }
})