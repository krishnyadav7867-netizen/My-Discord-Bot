// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (email) {
            alert('Thank you for subscribing! Check your email for confirmation.');
            newsletterForm.reset();
        }
    });
}

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Show success message
        alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// CTA button click handler
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        document.querySelector('#grandrp').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
        }
    });
}, observerOptions);

// Observe guide cards
document.querySelectorAll('.guide-card').forEach(card => {
    observer.observe(card);
});

// Add fade-in animation CSS
const style = document.createElement('style');
style.textContent = `
    .guide-card {
        opacity: 0;
        animation: fadeIn 0.6s ease-in-out forwards;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Mobile menu toggle
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar .container');
    const nav = document.querySelector('.navbar');
    
    if (window.innerWidth <= 768) {
        // Mobile menu functionality
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Add scroll animation
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    document.documentElement.style.setProperty('--scroll', scrollTop + 'px');
});

console.log('🎮 Infinity Edge Info - Website loaded successfully!');