let headerButtons = document.querySelector(".header-buttons");
let sun = document.querySelector(".icon-sun");
let moon = document.querySelector(".icon-moon");
let whiteTheme = document.querySelector(".body");
let blackTheme = document.querySelector(".body");

headerButtons.addEventListener('click', function (event) {
    event.preventDefault();
    sun.classList.toggle('not-visible');
    moon.classList.toggle('not-visible');
    whiteTheme.classList.toggle('white');
    blackTheme.classList.toggle('black');
});