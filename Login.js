const loginButton = document.querySelector(".btnLogin-popup");
const loginContainer = document.querySelector(".login-container");
const closeIcon = document.querySelector(".icon-close");

loginButton.addEventListener("click", () => {
    loginContainer.style.display = "flex";
});
closeIcon.addEventListener("click", () => {
    loginContainer.style.display = "none";
});

const navbar = document.querySelector('.navbar');


const ellipsisIcon = document.createElement('ion-icon');
ellipsisIcon.setAttribute('name', 'ellipsis-vertical');
ellipsisIcon.style.fontSize = '1.5em';
ellipsisIcon.style.marginRight = '10px';

if (window.innerWidth <= 768) {
    navbar.insertBefore(ellipsisIcon, navbar.querySelector('.btnLogin-popup'));
}


ellipsisIcon.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        navLinks.forEach(link => {
            link.style.display = link.style.display === 'none' ? 'block' : 'none';
        });
    }
});


const navLinks = document.querySelectorAll('.navbar .nav-link');
