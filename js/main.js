// Handicraft websites data
const handicraftWebsites = [
    {
        name: "Runway India",
        url: "https://runwayindia.com",
        description: "Premium Indian handicrafts and artisanal products, featuring exquisite handcrafted items from skilled artisans across India."
    },
    {
        name: "Craftsvilla",
        url: "https://craftsvilla.com",
        description: "A treasure trove of traditional Indian handicrafts, ethnic wear, and handmade products celebrating India's rich cultural heritage."
    },
    {
        name: "Fabindia",
        url: "https://fabindia.com",
        description: "Authentic Indian handcrafted products, textiles, and home decor items that blend tradition with contemporary design."
    },
    {
        name: "Jaypore",
        url: "https://jaypore.com",
        description: "Curated collection of Indian handicrafts, jewelry, and apparel showcasing the finest craftsmanship from different regions."
    },
    {
        name: "Gaatha",
        url: "https://gaatha.com",
        description: "Stories and products of Indian artisans, bringing traditional crafts and their makers to the modern marketplace."
    },
    {
        name: "Etsy India",
        url: "https://etsy.com/in",
        description: "Platform for unique handmade and vintage items from talented Indian sellers, connecting artisans with global buyers."
    },
    {
        name: "Amazon Karigar",
        url: "https://amazon.in/karigar",
        description: "Amazon's dedicated platform for Indian artisans, featuring authentic handcrafted products from across the country."
    },
    {
        name: "AuthIndia",
        url: "https://authindia.com",
        description: "Marketplace for genuine Indian handicrafts, promoting traditional art forms and supporting local artisans."
    },
    {
        name: "The India Craft House",
        url: "https://indiacrafthouse.com",
        description: "Premium handcrafted products showcasing India's diverse artistic traditions and cultural heritage."
    },
    {
        name: "Kreate",
        url: "https://kreate.com",
        description: "Creative platform connecting Indian artisans with modern consumers, featuring innovative handicraft designs."
    }
];

// Initialize website cards
function initializeWebsiteCards() {
    const exploreBtn = document.querySelector('.hero-section .btn-primary');
    exploreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showWebsiteCollection();
    });
}

// Show website collection modal with animation
function showWebsiteCollection() {
    let modal = document.getElementById('websiteModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'websiteModal';
        modal.className = 'website-modal';
        document.body.appendChild(modal);
    }

    // Generate modal content with improved layout
    modal.innerHTML = `
        <div class="website-modal-content">
            <div class="website-modal-header">
                <h2>Explore Indian Handicraft Marketplaces</h2>
                <button class="close-modal" aria-label="Close modal">&times;</button>
            </div>
            <div class="website-grid">
                ${handicraftWebsites.map((site, index) => `
                    <div class="website-card fade-in" style="animation-delay: ${index * 0.1}s">
                        <h3>${site.name}</h3>
                        <p>${site.description}</p>
                        <a href="${site.url}" target="_blank" class="btn">Visit Website</a>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Add event listeners
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => closeModal(modal));
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });

    // Prevent scrolling of background
    document.body.style.overflow = 'hidden';
    
    // Show modal with animation
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
        modal.querySelector('.website-modal-content').style.opacity = '1';
    }, 10);
}

// Close modal with animation
function closeModal(modal) {
    modal.classList.remove('show');
    modal.querySelector('.website-modal-content').style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsiteCards();
});

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

// Add scroll animation
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});
