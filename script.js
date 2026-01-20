document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Logic for Glass Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Scroll karne par ye class add hogi (Transparent/Blur)
            navbar.classList.add('scrolled');
        } else {
            // Wapas upar aane par class hat jayegi (Solid Dark)
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scroll for Buttons
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Mobile Menu Toggle
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