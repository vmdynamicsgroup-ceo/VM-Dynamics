// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. MOBILE MENU TOGGLE
    // ==========================================
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when a navigation link is clicked
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // ==========================================
    // 2. CONTACT FORM SUBMISSION
    // ==========================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form reload

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            // Simple feedback alert for user
            alert(`Thank you, ${name}! Your message has been received. We will contact you at ${email} soon.`);

            // Reset the form fields
            contactForm.reset();
        });
    }

});