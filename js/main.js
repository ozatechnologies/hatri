// Handicraft websites data
const handicraftWebsites = [
    {
        name: "Runway India",
        url: "https://runwayindia.com",
        description: "Premium Indian handicrafts and artisanal products"
    },
    {
        name: "Craftsvilla",
        url: "https://craftsvilla.com",
        description: "Traditional Indian handicrafts and ethnic wear"
    },
    {
        name: "Fabindia",
        url: "https://fabindia.com",
        description: "Authentic Indian handcrafted products and textiles"
    },
    {
        name: "Jaypore",
        url: "https://jaypore.com",
        description: "Curated Indian handicrafts and jewelry"
    },
    {
        name: "Gaatha",
        url: "https://gaatha.com",
        description: "Stories and products of Indian artisans"
    },
    {
        name: "Etsy India",
        url: "https://etsy.com/in",
        description: "Handmade and vintage items from Indian sellers"
    },
    {
        name: "Amazon Karigar",
        url: "https://amazon.in/karigar",
        description: "Amazon's platform for Indian artisans"
    },
    {
        name: "AuthIndia",
        url: "https://authindia.com",
        description: "Authentic Indian handicrafts marketplace"
    },
    {
        name: "The India Craft House",
        url: "https://indiacrafthouse.com",
        description: "Premium handcrafted products from India"
    },
    {
        name: "Kreate",
        url: "https://kreate.com",
        description: "Creative Indian handicrafts platform"
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

// Show website collection modal
function showWebsiteCollection() {
    // Create modal container if it doesn't exist
    let modal = document.getElementById('websiteModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'websiteModal';
        modal.className = 'website-modal';
        document.body.appendChild(modal);
    }

    // Generate modal content
    modal.innerHTML = `
        <div class="website-modal-content">
            <div class="website-modal-header">
                <h2>Explore Handicraft Marketplaces</h2>
                <button class="close-modal">&times;</button>
            </div>
            <div class="website-grid">
                ${handicraftWebsites.map(site => `
                    <div class="website-card fade-in">
                        <h3>${site.name}</h3>
                        <p>${site.description}</p>
                        <a href="${site.url}" target="_blank" class="btn btn-primary">Visit Website</a>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Add event listeners
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    });

    // Show modal
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeWebsiteCards();
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
