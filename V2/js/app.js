// JinnGarden App JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Initialize interactive elements
    initInteractiveElements();
    
    // Handle responsive navigation
    setupResponsiveNavigation();
    
    // Setup plant cards
    setupPlantCards();
});

// Initialize fade-in animations for page elements
function initAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-load');
    
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animate-fade-in');
        }, index * 100); // Stagger animations
    });
}

// Initialize interactive elements like buttons, dropdowns, etc.
function initInteractiveElements() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRippleEffect);
    });
    
    // Initialize tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(setupTooltip);
    
    // Setup collapsible sections
    const collapsibles = document.querySelectorAll('.collapsible-header');
    collapsibles.forEach(setupCollapsible);
}

// Create ripple effect on button click
function createRippleEffect(event) {
    const button = event.currentTarget;
    
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.querySelector('.ripple');
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

// Setup tooltip functionality
function setupTooltip(element) {
    const tooltipText = element.getAttribute('data-tooltip');
    
    element.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = tooltipText;
        
        document.body.appendChild(tooltip);
        
        const elementRect = element.getBoundingClientRect();
        tooltip.style.left = `${elementRect.left + (elementRect.width / 2) - (tooltip.offsetWidth / 2)}px`;
        tooltip.style.top = `${elementRect.top - tooltip.offsetHeight - 10}px`;
        
        setTimeout(() => {
            tooltip.classList.add('show');
        }, 10);
    });
    
    element.addEventListener('mouseleave', () => {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.classList.remove('show');
            setTimeout(() => {
                tooltip.remove();
            }, 300);
        }
    });
}

// Setup collapsible sections
function setupCollapsible(header) {
    const content = header.nextElementSibling;
    content.style.maxHeight = '0px';
    
    header.addEventListener('click', () => {
        header.classList.toggle('active');
        
        if (content.style.maxHeight === '0px') {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0px';
        }
    });
}

// Handle responsive navigation
function setupResponsiveNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    // Set active state based on current page
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href && window.location.href.includes(href)) {
            item.classList.add('active');
        }
    });
    
    // Add touch feedback for mobile
    navItems.forEach(item => {
        item.addEventListener('touchstart', () => {
            item.classList.add('touch-active');
        });
        
        item.addEventListener('touchend', () => {
            setTimeout(() => {
                item.classList.remove('touch-active');
            }, 150);
        });
    });
}

// Setup plant cards with interactive features
function setupPlantCards() {
    const plantCards = document.querySelectorAll('.plant-card');
    
    plantCards.forEach(card => {
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
        
        // Update progress bars with animation
        const progressBar = card.querySelector('.progress-bar');
        if (progressBar) {
            const targetWidth = progressBar.getAttribute('data-progress') + '%';
            setTimeout(() => {
                progressBar.style.width = targetWidth;
            }, 300);
        }
    });
}

// Helper function to format dates in Hungarian
function formatDateHu(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('hu-HU', options);
}

// Helper function to format numbers in Hungarian
function formatNumberHu(number) {
    return number.toLocaleString('hu-HU');
}

// Detect screen size changes and adjust UI accordingly
window.addEventListener('resize', debounce(function() {
    adjustUIForScreenSize();
}, 250));

function adjustUIForScreenSize() {
    const width = window.innerWidth;
    const appContainer = document.querySelector('.app-container');
    
    if (width >= 1024) {
        // Desktop layout adjustments
        appContainer.classList.add('desktop-layout');
        appContainer.classList.remove('tablet-layout', 'mobile-layout');
    } else if (width >= 768) {
        // Tablet layout adjustments
        appContainer.classList.add('tablet-layout');
        appContainer.classList.remove('desktop-layout', 'mobile-layout');
    } else {
        // Mobile layout adjustments
        appContainer.classList.add('mobile-layout');
        appContainer.classList.remove('desktop-layout', 'tablet-layout');
    }
}

// Debounce function to limit execution frequency
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize UI adjustments on load
adjustUIForScreenSize();
