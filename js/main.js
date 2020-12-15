let headerButtons = document.querySelector(".header-buttons");
let sun = document.querySelector(".icon-sun");
let moon = document.querySelector(".icon-moon");
let whiteTheme = document.querySelector(".body");
let blackTheme = document.querySelector(".body");
let whiteThemeOpportunities = document.querySelector(".section-opportunities");
let blackThemeOpportunities = document.querySelector(".section-opportunities");
let whiteThemePremium = document.querySelector(".section-premium");
let blackThemePremium = document.querySelector(".section-premium");

headerButtons.addEventListener('click', function (event) {
    event.preventDefault();
    sun.classList.toggle('not-visible');
    moon.classList.toggle('not-visible');
    whiteTheme.classList.toggle('white');
    blackTheme.classList.toggle('black');
    whiteThemeOpportunities.classList.toggle('white');
    blackThemeOpportunities.classList.toggle('black');
    whiteThemePremium.classList.toggle('white');
    blackThemePremium.classList.toggle('black');
});