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

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Recommendation form handling
document.getElementById('recommendationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('recommenderName').value.trim();
    const position = document.getElementById('recommenderPosition').value.trim();
    const text = document.getElementById('recommendationText').value.trim();
    
    if (!name || !position || !text) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }
    
    // Create new recommendation element
    const recommendationsList = document.getElementById('recommendationsList');
    const newRecommendation = document.createElement('div');
    newRecommendation.className = 'recommendation-item';
    newRecommendation.style.opacity = '0';
    newRecommendation.style.transform = 'translateY(20px)';
    
    newRecommendation.innerHTML = `
        <div class="recommender-info">
            <h4>${name}</h4>
            <p>${position}</p>
        </div>
        <p class="recommendation-text">"${text}"</p>
    `;
    
    // Add to the beginning of the list
    recommendationsList.insertBefore(newRecommendation, recommendationsList.firstChild);
    
    // Animate the new recommendation
    setTimeout(() => {
        newRecommendation.style.transition = 'all 0.5s ease';
        newRecommendation.style.opacity = '1';
        newRecommendation.style.transform = 'translateY(0)';
    }, 100);
    
    // Clear form
    this.reset();
    
    // Show confirmation modal
    showModal();
});

// Modal functionality
function showModal() {
    const modal = document.getElementById('confirmationModal');
    modal.style.display = 'block';
    
    // Auto close after 3 seconds
    setTimeout(() => {
        modal.style.display = 'none';
    }, 3000);
}

// Close modal when clicking the X or outside the modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('confirmationModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Add animation to skills and projects on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill items and project cards
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    const projectCards = document.querySelectorAll('.project-card');
    
    [...skillItems, ...projectCards].forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
});

// Add typing effect to the about section
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const aboutText = document.querySelector('.about-text p');
    const originalText = aboutText.textContent;
    
    // Start typing effect after a short delay
    setTimeout(() => {
        typeWriter(aboutText, originalText, 30);
    }, 1000);
});

// Add parallax effect to background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('body');
    const speed = scrolled * 0.5;
    
    parallax.style.transform = `translateY(${speed}px)`;
});

// Add interactive hover effects to navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
