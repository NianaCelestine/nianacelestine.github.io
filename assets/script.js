// Select all strong elements within the skills list
document.querySelectorAll('.skills-list > li > strong').forEach(header => {
    header.addEventListener('click', () => {
        // Toggle the 'active' class on the parent <li> to show/hide the content
        const listItem = header.parentElement;
        listItem.classList.toggle('active');
    });
});
