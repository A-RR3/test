var close = document.getElementById("close");
var promo = document.getElementById("watchPromo");
var selected = document.getElementById("company-name");




close.addEventListener('click', closeMinue);
promo.addEventListener('mouseover', promoFont)
promo.addEventListener('mouseout', promoFontRevet)
selected.addEventListener('copy', copySelected);
selected.addEventListener('cut', cutSelected);

var watchP = document.getElementById("watchPromo");

function promoFont() {
    watchP.style.fontStyle.bold;
    watchP.fontSize = "40px";
}

function promoFontRevet() {
    watchP.style.fontSize = "25px";
}



function copySelected() {
    selected.innerText = "Error-company";

}

function cutSelected() {
    selected.innerText = "Start Point";
}