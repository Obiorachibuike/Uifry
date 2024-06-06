document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const download = document.querySelector('.button-right-cont');
    const cancel = document.querySelector('.cancel');
    const navMenu = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        cancel.classList.toggle('none');
        download.classList.toggle('none');
        download.classList.toggle('none');
    });
    cancel.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        cancel.classList.toggle('none');
        download.classList.toggle('none');
    });
});
 

