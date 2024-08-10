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