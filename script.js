document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Logic
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Scroll karne par Dark Glassy Class add hogi
            navbar.classList.add('scrolled');
        } else {
            // Top par wapas Transparent ho jayega
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navPill = document.querySelector('.nav-pill'); 

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Simple toggle for mobile view
            if (navPill.style.display === 'block') {
                navPill.style.display = 'none';
            } else {
                navPill.style.display = 'block';
                navPill.style.position = 'absolute';
                navPill.style.top = '80px';
                navPill.style.right = '20px';
                navPill.style.flexDirection = 'column';
                navPill.style.zIndex = '999';
            }
        });
    }
});