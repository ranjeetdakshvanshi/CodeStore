function showAlert(template) {
    alert('You selected: ' + template);
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    // Close the sidebar if it's open
    closeMenu();
}

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
        sidebar.classList.toggle('hidden'); // Use 'hidden' for clarity
    } else {
        console.warn('Sidebar element not found.');
    }
}

function closeMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        sidebar.classList.add('hidden');
    }
}

// Close sidebar when clicking outside of it
document.addEventListener('click', (event) => {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.toggle-button'); // Replace with your actual button's class or ID

    if (sidebar && !sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        closeMenu();
    }
});

// Add click event listeners to section links
document.querySelectorAll('.section-link').forEach(link => {
    link.addEventListener('click', () => {
        const sectionId = link.getAttribute('data-section-id'); // Assuming links have a data attribute for section ID
        showSection(sectionId);
    });
});
