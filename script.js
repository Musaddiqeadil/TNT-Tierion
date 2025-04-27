document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const menuList = document.querySelector('.menu-list');
    const menuLinks = document.querySelectorAll('.menu-link');
    const navbar = document.querySelector('.Navbar');

    menuBtn.addEventListener('click', () => {
        menuList.classList.add('show');

        menuBtn.classList.add('hide');
        menuBtn.classList.remove('show');

        cancelBtn.classList.add('show');
        cancelBtn.classList.remove('hide');
    });

    cancelBtn.addEventListener('click', () => {
        menuList.classList.remove('show');
        
        menuBtn.classList.remove('hide');
        menuBtn.classList.add('show');


        cancelBtn.classList.add('hide');
        cancelBtn.classList.remove('show');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuList.classList.remove('show');
            menuBtn.classList.remove('hide');
        });
    });

    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
});




