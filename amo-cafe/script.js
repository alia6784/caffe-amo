// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Navbar scroll effect
    const navbar = document.getElementById("navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // ScrollReveal Animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: false // only reveal once
    });

    sr.reveal('.reveal-up');
    sr.reveal('.reveal-up.delay-1', { delay: 500 });
    sr.reveal('.reveal-up.delay-2', { delay: 600 });
    
    sr.reveal('.reveal-left', { origin: 'left' });
    sr.reveal('.reveal-right', { origin: 'right' });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
