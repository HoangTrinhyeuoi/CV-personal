// JavaScript for Portfolio Website Functionality

// Function to add new recommendation
function addRecommendation() {
    // Get the message from the text area
    const message = document.getElementById('new-recommendation').value.trim();
    
    // Check if message is empty
    if (!message) {
        alert('Please write a recommendation before submitting.');
        return;
    }
    
    // Create new recommendation element
    const recommendationsList = document.getElementById('recommendations-list');
    const newRecommendation = document.createElement('div');
    newRecommendation.className = 'recommendation-item';
    newRecommendation.style.cssText = 'color: aliceblue; font-size: larger; margin: 10px 0; padding: 15px; border: 1px solid #ddd; border-radius: 5px; background: rgba(255,255,255,0.1);';
    
    // Add the recommendation content
    newRecommendation.innerHTML = `
        <p><strong>Anonymous User:</strong> "${message}"</p>
    `;
    
    // Add to the recommendations list
    recommendationsList.appendChild(newRecommendation);
    
    // Clear the text area
    document.getElementById('new-recommendation').value = '';
    
    // Show confirmation popup
    showConfirmationPopup();
}

// Function to show confirmation popup
function showConfirmationPopup() {
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.id = 'popup-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    // Create popup content
    const popup = document.createElement('div');
    popup.style.cssText = `
        background: linear-gradient(135deg, #2c3e50, #34495e);
        color: white;
        padding: 30px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        max-width: 400px;
        width: 90%;
    `;
    
    popup.innerHTML = `
        <h2 style="color: #3498db; margin-bottom: 20px;">✓ Success!</h2>
        <p style="margin-bottom: 20px; font-size: 18px;">Thank you for your recommendation! It has been added successfully.</p>
        <button onclick="closePopup()" style="
            background: #3498db;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        ">Close</button>
    `;
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Auto close after 3 seconds
    setTimeout(() => {
        closePopup();
    }, 3000);
}

// Function to close popup
function closePopup() {
    const overlay = document.getElementById('popup-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add event listeners when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add click event for recommendation button
    const submitBtn = document.getElementById('submit-recommendation');
    if (submitBtn) {
        submitBtn.addEventListener('click', addRecommendation);
    }
    
    // Add enter key support for text area
    const textArea = document.getElementById('new-recommendation');
    if (textArea) {
        textArea.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                addRecommendation();
            }
        });
    }
});

// Function to go to home (scroll to top)
function goHome() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}