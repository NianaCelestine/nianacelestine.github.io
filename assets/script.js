document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('expanded');
    });
});
