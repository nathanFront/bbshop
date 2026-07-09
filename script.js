// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Cal.com Functions
function openCalendly() {
    const container = document.getElementById('calendly-container');
    const widget = document.querySelector('.calendly-inline-widget');
    
    // Remove o widget antigo se existir
    if (widget) {
        widget.remove();
    }
    
    // Remove o botão de fechar temporariamente
    const closeBtn = container.querySelector('.calendly-close');
    
    // Cria um novo iframe para o Cal.com
    const newWidget = document.createElement('iframe');
    newWidget.className = 'calendly-inline-widget';
    newWidget.src = 'https://cal.com/nathan-borges-xpjvz0/60';
    newWidget.style.width = '100%';
    newWidget.style.height = '700px';
    newWidget.style.border = 'none';
    newWidget.style.borderRadius = '10px';
    
    container.appendChild(newWidget);
    
    // Recoloca o botão de fechar
    container.appendChild(closeBtn);
    
    container.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCalendly() {
    const container = document.getElementById('calendly-container');
    container.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close when clicking outside the widget
document.getElementById('calendly-container').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCalendly();
    }
});

// Close with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCalendly();
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
};

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});
