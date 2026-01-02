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
        
        // Add hover effect with animation
        page.addEventListener('mouseenter', function() {
            this.style.transform = this.style.transform.includes('translate') 
                ? this.style.transform + ' scale(1.15)' 
                : 'scale(1.15)';
        });
        
        page.addEventListener('mouseleave', function() {
            // Reset to original transform
            const classes = this.className;
            if (classes.includes('top')) {
                this.style.transform = 'translateX(-50%)';
            } else if (classes.includes('top-left') || classes.includes('bottom-left')) {
                this.style.transform = 'translateX(-50%)';
            } else if (classes.includes('top-right') || classes.includes('bottom-right')) {
                this.style.transform = 'translateX(50%)';
            } else if (classes.includes('bottom')) {
                this.style.transform = 'translateX(-50%)';
            }
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
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -50%) scale(1.2); }
        100% { transform: translate(-50%, -50%) scale(1); }
    }
`;
document.head.appendChild(style);
