function toggleAccordion(sectionId) {
    const content = document.getElementById('content' + sectionId.slice(-1));
    const icon = document.getElementById('icon' + sectionId.slice(-1));
    
    // Close all other sections
    for (let i = 1; i <= 4; i++) {
        if (i != sectionId.slice(-1)) {
            const otherContent = document.getElementById('content' + i);
            const otherIcon = document.getElementById('icon' + i);
            if (otherContent && otherIcon) {
                otherContent.classList.remove('active');
                otherIcon.classList.remove('rotated');
            }
        }
    }
    
    // Toggle current section
    if (content && icon) {
        content.classList.toggle('active');
        icon.classList.toggle('rotated');
    }
}

// Open first section by default
document.addEventListener('DOMContentLoaded', function() {
    toggleAccordion('section1');
});
