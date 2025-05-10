document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.Navbar');

    const toggle = document.querySelector(".toggle");
    const navRight = document.querySelector(".nav-right");
    
    toggle.addEventListener('click', ()=>{
        toggle.classList.toggle("active")
        navRight.classList.toggle("active")
    })
    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
});




