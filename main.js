// Minimal JavaScript for subtle interactions and structural enhancements

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navWrapper = document.querySelector('.nav-wrapper');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navWrapper.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navWrapper.classList.remove('active');
        });
    });

    // Navbar scroll effect refinement
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.borderBottomColor = 'var(--border)';
        } else {
            navbar.style.borderBottomColor = 'transparent';
        }
    });

    // Reveal elements on scroll (subtle)
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
        observer.observe(card);
    });

    // Logging system initialization
    const currentTime = new Date().toLocaleTimeString();
    console.log(`[SYS_INIT] Rishad Ali Portfolio v1.0 initialized at ${currentTime}`);
    console.log(`[SYS_STATUS] All systems operational.`);
});
