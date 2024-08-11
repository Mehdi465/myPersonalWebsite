const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

function copyToClipboard(text) {

    // copy to clipboard
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    // Show the notification message
    var notification = document.getElementById('copy-notification');
    notification.style.display = 'block';

    // Hide the notification after 3 seconds
    setTimeout(function() {
        notification.style.display = 'none';
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const homeLink = document.getElementById('home-link');
    const blogLink = document.getElementById('blog-link');
    const projectsLink = document.getElementById('projects-link'); // Added for completeness

    if (currentPath.includes('index.html')) {
        homeLink.classList.add('active');
    } else if (currentPath.includes('blog.html')) {
        blogLink.classList.add('active');
    } else if (currentPath.includes('projects.html')) { // Added for completeness
        projectsLink.classList.add('active');
    }
});