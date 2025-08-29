// CV Portfolio Website JavaScript
// Handles form submission and popup functionality

document.addEventListener('DOMContentLoaded', function() {
    // Navigation smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Recommendation form submission
    const recommendationForm = document.getElementById('recommendation-form');
    if (recommendationForm) {
        recommendationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('recommender-name');
            const title = formData.get('recommender-title');
            const message = formData.get('recommendation-message');
            
            // Validate form
            if (!name || !title || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Create new recommendation element
            const recommendationsList = document.getElementById('recommendations-list');
            const newRecommendation = document.createElement('div');
            newRecommendation.className = 'recommendation-item';
            newRecommendation.innerHTML = `
                <div class="recommendation-content">
                    <p style="color: aliceblue; font-size: larger; font-style: italic;">"${message}"</p>
                    <div class="recommendation-author">
                        <p style="color: rgb(255, 196, 238); font-weight: bold;">${name}</p>
                        <p style="color: wheat; font-size: medium;">${title}</p>
                    </div>
                </div>
            `;
            
            // Add to recommendations list
            recommendationsList.appendChild(newRecommendation);
            
            // Show confirmation popup
            showConfirmationPopup(name);
            
            // Reset form
            this.reset();
        });
    }
});

// Show confirmation popup
function showConfirmationPopup(recommenderName) {
    // Create popup overlay
    const popup = document.createElement('div');
    popup.className = 'popup-overlay';
    popup.innerHTML = `
        <div class="popup-content">
            <div class="popup-header">
                <h3 style="color: #4CAF50; margin: 0;">✓ Success!</h3>
            </div>
            <div class="popup-body">
                <p>Thank you, <strong>${recommenderName}</strong>!</p>
                <p>Your recommendation has been successfully added to my portfolio.</p>
            </div>
            <div class="popup-footer">
                <button onclick="closePopup()" class="popup-btn">Close</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // Auto close after 5 seconds
    setTimeout(() => {
        closePopup();
    }, 5000);
}

// Close popup
function closePopup() {
    const popup = document.querySelector('.popup-overlay');
    if (popup) {
        popup.remove();
    }
}

// Close popup when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('popup-overlay')) {
        closePopup();
    }
});