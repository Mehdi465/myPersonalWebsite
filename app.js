const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}