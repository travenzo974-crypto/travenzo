document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars'); icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times'); icon.classList.add('fa-bars');
            }
        });
    }

    // QR Code Modal Logic
    window.openQR = function() {
        document.getElementById('qrModal').style.display = 'block';
    }

    window.closeQR = function() {
        document.getElementById('qrModal').style.display = 'none';
    }

    // Close modal if clicked outside
    window.onclick = function(event) {
        const modal = document.getElementById('qrModal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});