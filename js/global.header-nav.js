window.addEventListener('scroll', function () {
    const nav = document.querySelector('.header');
    if (window.scrollY > 10) {
        nav.classList.add('header__nav--scrolled');
    } else {
        nav.classList.remove('header__nav--scrolled');
    }
});