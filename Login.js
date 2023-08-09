const loginButton = document.querySelector(".btnLogin-popup");
const loginContainer = document.querySelector(".login-container");
const closeIcon = document.querySelector(".icon-close");

loginButton.addEventListener("click", () => {
    loginContainer.style.display = "flex";
});
closeIcon.addEventListener("click", () => {
    loginContainer.style.display = "none";
});
