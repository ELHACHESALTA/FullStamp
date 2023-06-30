document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem("dark-mode") === null) {
        localStorage.setItem("dark-mode", "true");
    } else if (localStorage.getItem("dark-mode") === "true"){
        modoOscuro();
    } else if (localStorage.getItem("dark-mode") === "false") {
        modoClaro();
        document.getElementById("principal").classList.toggle("light");
        document.getElementById("principal").classList.toggle("dark");
    }
});

var botonClaro = document.getElementById("modoClaro");

botonClaro.addEventListener("click", () => {
    modoClaro();
    document.getElementById("principal").classList.toggle("light");
    document.getElementById("principal").classList.toggle("dark");
});

var botonOscuro = document.getElementById("modoOscuro");

botonOscuro.addEventListener("click", () => {
    modoOscuro();
    document.getElementById("principal").classList.toggle("light");
    document.getElementById("principal").classList.toggle("dark");
});

function modoClaro() {
    document.getElementById("modoOscuro").style.display = "inline";
    document.getElementById("principal").style.backgroundImage = "url('img/lightFondo.png')";
    document.getElementById("superior").style.backgroundColor = "#5FFF9E";
    document.getElementById("pie").style.backgroundColor = "#00E059";
    document.getElementById("centro").style.backgroundColor = "rgba(183,255,211,95%)";
}

function modoOscuro() {
    document.getElementById("modoOscuro").style.display = "";
    document.getElementById("principal").style.backgroundImage = "";
    document.getElementById("superior").style.backgroundColor = "";
    document.getElementById("pie").style.backgroundColor = "";
    document.getElementById("centro").style.backgroundColor = "";
}