// Portfolio Website JavaScript
// Handles recommendation form submission and interactive features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize recommendation form functionality
    initializeRecommendationForm();
    
    // Smooth scrolling for navigation links
    initializeSmoothScrolling();
});

function initializeRecommendationForm() {
    const form = document.getElementById('recommendationForm');
    const recommendationsList = document.getElementById('recommendationsList');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('recommenderName').value.trim();
            const title = document.getElementById('recommenderTitle').value.trim();
            const message = document.getElementById('recommendationMessage').value.trim();
            
            if (name && title && message) {
                // Add new recommendation to the list
                addRecommendation(name, title, message);
                
                // Reset form
                form.reset();
                
                // Show confirmation pop-up
                showConfirmationPopup(name);
            }
        });
    }
}

function addRecommendation(name, title, message) {
    const recommendationsList = document.getElementById('recommendationsList');
    
    const newRecommendation = document.createElement('div');
    newRecommendation.className = 'recommendation-item';
    newRecommendation.innerHTML = `
        <div class="recommendation-content">
            <p class="recommendation-text">"${message}"</p>
            <div class="recommender-info">
                <h4 class="recommender-name">${name}</h4>
                <p class="recommender-title">${title}</p>
            </div>
        </div>
    `;
    
    recommendationsList.appendChild(newRecommendation);
}

function showConfirmationPopup(recommenderName) {
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    
    // Create popup content
    const popup = document.createElement('div');
    popup.className = 'popup-content';
    popup.innerHTML = `
        <div class="popup-header">
            <h3>✓ Recommendation Submitted Successfully!</h3>
        </div>
        <div class="popup-body">
            <p>Thank you <strong>${recommenderName}</strong> for your recommendation!</p>
            <p>Your testimonial has been added to my portfolio.</p>
        </div>
        <div class="popup-footer">
            <button onclick="closePopup()" class="popup-close-btn">Close</button>
        </div>
    `;
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Auto close after 5 seconds
    setTimeout(() => {
        closePopup();
    }, 5000);
}

function closePopup() {
    const overlay = document.querySelector('.popup-overlay');
    if (overlay) {
        overlay.remove();
    }
}

function initializeSmoothScrolling() {
    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Home icon functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}