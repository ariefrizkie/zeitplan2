function menuMobile() {
    const menu = document.querySelector('.menu');
    const burgerMenu = document.querySelector('.burgerMenu');
    const hr = document.getElementsByTagName('hr');

    burgerMenu.addEventListener('click', function () {
        if (menu.classList.contains('hide')) {
            menu.classList.remove('hide')
            menu.classList.remove('fadeOut')
            menu.classList.add('fadeIn')
        } else {
            menu.classList.add('fadeOut')
            setTimeout(() => {
                menu.classList.add('hide');
                
            }, 1000);
            menu.classList.remove('fadeIn')
        }
    })
}

menuMobile();