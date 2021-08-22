var menu = document.getElementById("openMinue");
menu.addEventListener('click', openMinue);

function openMinue() {

    document.getElementById("menu").style.display = "flex";


}

var menu2 = document.getElementById("close");
menu2.addEventListener('click', closeMinue);

function closeMinue() {
    document.getElementById("menu").style.display = "none";


}