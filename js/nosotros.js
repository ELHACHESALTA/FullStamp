function irIndex() {
    window.location.href = "index.html";
}

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
    document.getElementById("banner").style.backgroundImage = "url('img/lightBanner.png')";
}

function modoOscuro() {
    document.getElementById("modoOscuro").style.display = "";
    document.getElementById("principal").style.backgroundImage = "";
    document.getElementById("superior").style.backgroundColor = "";
    document.getElementById("pie").style.backgroundColor = "";
    document.getElementById("centro").style.backgroundColor = "";
    document.getElementById("banner").style.backgroundImage = "";
}

function animaImg() {
    document.getElementById("nosotros1_img").style.right = "0";
    document.getElementById("nosotros1_img").style.transition = "3s";
    document.getElementById("nosotros2_img").style.left = "0";
    document.getElementById("nosotros2_img").style.transitionDelay = "1s";
    document.getElementById("nosotros2_img").style.transitionDuration = "3s";
    document.getElementById("nosotros3_img").style.right = "0";
    document.getElementById("nosotros3_img").style.transitionDelay = "2s";
    document.getElementById("nosotros3_img").style.transitionDuration = "4s";
}