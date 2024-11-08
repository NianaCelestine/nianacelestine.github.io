document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Toggle the expanded class
        content.classList.toggle('expanded');

        // Set max-height based on expanded state
        if (content.classList.contains('expanded')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }
    });
});
