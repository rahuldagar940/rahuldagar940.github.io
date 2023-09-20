/*=========================================Toggle icons navbar====================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==========================================Scroll for active links=================================*/
let selections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    selections.forEach(sec => {
        let top = window.scrollY;
        let offSet = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offSet && top < offSet + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href* = ' + id + ']').classList.add('active');
            });
        };
    });
/*===================================Sticky navbar==================================================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

/*======================remove toggle icon and navbar when click navbar link========================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
/*==========================================Scroll Reveal================================================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
/*=======================================Scroll Reveal====================================================*/