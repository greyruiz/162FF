
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    console.log('Scroll event triggered');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        console.log('Navbar scrolled class added');
    } else {
        navbar.classList.remove('scrolled');
        console.log('Navbar scrolled class removed');
    }
});

const navbarToggler = document.querySelector('.navbar-toggler');
const header = document.querySelector('nav');

navbarToggler.addEventListener('click', function () {
    console.log('Navbar toggler clicked');
    if (header.classList.contains('header-expanded')) {
        header.classList.remove('header-expanded');
        console.log('Header expanded class removed');
    } else {
        header.classList.add('header-expanded');
        console.log('Header expanded class added');
    }
});
