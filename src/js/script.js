window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

// document.querySelector('.hamburger').onclick = () => {
//     document.querySelector('.hamburger').classList.toggle('hamburger_active')
// }

// document.querySelector('.hamburger_active').onclick = () => {
//     document.querySelector('.hamburger_active').classList.toggle('hamburger ')
// }