// Select all collapsible headers
document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
        // Get the associated content section
        const content = header.nextElementSibling;
        
        // Toggle display
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
