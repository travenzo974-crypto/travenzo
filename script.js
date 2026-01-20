document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Background
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        }
    });

    // 2. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // 3. Simple Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if(hamburger){
        hamburger.addEventListener('click', ()=>{
             navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
             if(navLinks.style.display === 'flex') {
                 navLinks.style.flexDirection = 'column';
                 navLinks.style.position = 'absolute';
                 navLinks.style.top = '60px';
                 navLinks.style.right = '0';
                 navLinks.style.background = 'rgba(0,0,0,0.95)';
                 navLinks.style.width = '100%';
                 navLinks.style.padding = '20px';
                 navLinks.style.textAlign = 'center';
             }
        });
    }
});