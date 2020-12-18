let headerButtons = document.querySelector(".header-buttons");
let sun = document.querySelector(".icon-sun");
let moon = document.querySelector(".icon-moon");
let whiteThemeBody = document.querySelector(".body");
let blackThemeBody = document.querySelector(".body");
let whiteThemeOpportunities = document.querySelector(".section-opportunities");
let blackThemeOpportunities = document.querySelector(".section-opportunities");
let whiteThemePremium = document.querySelector(".section-premium");
let blackThemePremium = document.querySelector(".section-premium");
let whiteThemeFooter = document.querySelector(".footer");
let blackThemeFooter = document.querySelector(".footer");
let contentMainWrap = document.querySelector(".MAIN-WRAP");

headerButtons.addEventListener('click', function (event) {
    event.preventDefault();
    sun.classList.toggle('not-visible');
    moon.classList.toggle('not-visible');
    whiteThemeBody.classList.toggle('white');
    blackThemeBody.classList.toggle('black');
    whiteThemeOpportunities.classList.toggle('white');
    blackThemeOpportunities.classList.toggle('black');
    whiteThemePremium.classList.toggle('white');
    blackThemePremium.classList.toggle('black');
    whiteThemeFooter.classList.toggle('white');
    blackThemeFooter.classList.toggle('black');
});

let pasOnePas = document.querySelector("#pas1pas");
let pasOne =  document.querySelector("#pas1");
let pasNizTxt = document.querySelector(".pashalka-niz-txt")

pasOnePas.addEventListener('click', function (event) {
    event.preventDefault();
    pasOne.classList.toggle('dn');
    contentMainWrap.classList.toggle('dn');
    pasNizTxt.classList.toggle('dn')
});