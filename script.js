// RTP Community Website - Interactive JavaScript
// Simple interactivity for the website

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Simple animation for stat boxes
    const statBoxes = document.querySelectorAll('.stat-box');
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                entry.target.style.transition = 'all 0.6s ease';
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
            }
        });
    }, observerOptions);
    
    statBoxes.forEach(box => {
        observer.observe(box);
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Interactive Site Diagram functionality
    const diagramPages = document.querySelectorAll('.diagram-page');
    diagramPages.forEach(page => {
        page.addEventListener('click', function() {
            const pageName = this.textContent.trim().toLowerCase();
            const pageMap = {
                'home': 'index.html',
                'history': 'history.html',
                'lately': 'lately.html',
                'culture': 'culture.html',
                'economy': 'economy.html',
                'future': 'future.html'
            };
            
            // Find matching page
            for (let key in pageMap) {
                if (pageName.includes(key)) {
                    window.location.href = pageMap[key];
                    return;
                }
            }
        });
        
        // Store base transform for each page based on its position class
        const classes = page.className;
        let baseTransform = '';
        
        // Determine base transform based on class - match CSS exactly
        if (classes.includes('top')) {
            baseTransform = 'translateX(-50%)';
        } else if (classes.includes('top-left') || classes.includes('bottom-left')) {
            baseTransform = 'translateX(-50%)';
        } else if (classes.includes('top-right') || classes.includes('bottom-right')) {
            baseTransform = 'translateX(50%)';
        } else if (classes.includes('bottom')) {
            baseTransform = 'translateX(-50%)';
        }
        
        // Don't set initial transform - CSS handles positioning with !important
        // Only add transform on hover
        
        // Add hover effect with animation - preserve base transform
        page.addEventListener('mouseenter', function() {
            // Combine base transform with scale
            this.style.transform = baseTransform + ' scale(1.15)';
        });
        
        page.addEventListener('mouseleave', function() {
            // Remove inline style to let CSS !important take over
            this.style.transform = '';
        });
    });
    
    // Center RTP button functionality
    const centerRTP = document.querySelector('.diagram-center');
    if (centerRTP) {
        centerRTP.addEventListener('click', function() {
            // Navigate to home page
            window.location.href = 'index.html';
        });
    }
    
    // Image gallery lightbox effect (simple)
    const imageCards = document.querySelectorAll('.image-card img');
    imageCards.forEach(img => {
        img.addEventListener('click', function() {
            // Simple zoom effect
            if (this.style.transform === 'scale(1.2)') {
                this.style.transform = 'scale(1)';
                this.style.zIndex = '1';
            } else {
                this.style.transform = 'scale(1.2)';
                this.style.zIndex = '10';
                this.style.transition = 'transform 0.3s';
            }
        });
    });
    
    // Add fade-in animation for content sections
    const contentSections = document.querySelectorAll('.content-section');
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                entry.target.style.transition = 'all 0.6s ease';
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
            }
        });
    }, { threshold: 0.1 });
    
    contentSections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    console.log('RTP Community Website loaded successfully!');
});

// Add CSS animation for pulse
// Function to highlight event on map
function highlightEventOnMap(eventType) {
    const mapIframe = document.getElementById('rtp-map-iframe');
    if (!mapIframe) return;
    
    // Event locations with coordinates (all within RTP area)
    const eventLocations = {
        'festival': {
            lat: 35.8992,
            lng: -78.8636,
            zoom: 14,
            name: 'RTP Community Festival'
        },
        'summit': {
            lat: 35.9050,
            lng: -78.8700,
            zoom: 14,
            name: 'Tech Innovation Summit'
        },
        'networking': {
            lat: 35.8930,
            lng: -78.8570,
            zoom: 14,
            name: 'Networking Events'
        }
    };
    
    const location = eventLocations[eventType];
    if (location) {
        // Update map to show the event location with proper embed URL
        // Using a centered view on the event location
        const newMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.5!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f${location.zoom}!3m3!1m2!1s0x89ace472d0e3b5b5%3A0x1e3b8c8c8c8c8c8c!2sResearch%20Triangle%20Park%2C%20NC!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`;
        mapIframe.src = newMapUrl;
        
        // Highlight the event card with visual feedback
        const eventCards = document.querySelectorAll('.event-item, .event-location-card');
        eventCards.forEach(card => {
            if (card.dataset.event === eventType) {
                // Highlight the clicked event
                card.style.borderLeft = '6px solid #0066cc';
                card.style.boxShadow = '0 4px 10px rgba(0,102,204,0.3)';
                card.style.backgroundColor = '#e6f3ff';
                // Reset after 3 seconds
                setTimeout(() => {
                    card.style.borderLeft = '4px solid #00aa55';
                    card.style.boxShadow = 'none';
                    card.style.backgroundColor = 'white';
                }, 3000);
            }
        });
    }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -50%) scale(1.2); }
        100% { transform: translate(-50%, -50%) scale(1); }
    }
`;
document.head.appendChild(style);
