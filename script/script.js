window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 500) {
        navbar.style.opacity = '1';
    } else {
        navbar.style.opacity = '.5';
    }
});
