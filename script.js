document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    // const hamburger = document.querySelector('.hamburger');
    // const navLinks = document.querySelector('.nav-links');

    // hamburger.addEventListener('click', () => {
    //     navLinks.classList.toggle('active');
    // });

    // Enhanced parallax effect
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        // Create parallax effect
        heroSection.style.backgroundPositionY = `${rate}px`;
        
        // Fade effect for content
        const heroContent = document.querySelector('.hero-content');
        const opacity = 1 - (scrolled / heroSection.offsetHeight);
        heroContent.style.opacity = Math.max(opacity, 0);
    });
});


