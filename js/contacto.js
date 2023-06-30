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
    document.getElementById("pedido").style.backgroundColor = "#5FFF9E";
    document.getElementById("reclamo").style.backgroundColor = "#5FFF9E";
    document.getElementById("direccion").style.backgroundColor = "#5FFF9E";
    document.getElementById("direccion").style.outlineColor = "#B7FFD3";
    document.getElementById("telefono").style.backgroundColor = "#5FFF9E";
    document.getElementById("telefono").style.outlineColor = "#B7FFD3";
    document.getElementById("email").style.backgroundColor = "#5FFF9E";
    document.getElementById("email").style.outlineColor = "#B7FFD3";
}

function modoOscuro() {
    document.getElementById("modoOscuro").style.display = "";
    document.getElementById("principal").style.backgroundImage = "";
    document.getElementById("superior").style.backgroundColor = "";
    document.getElementById("pie").style.backgroundColor = "";
    document.getElementById("centro").style.backgroundColor = "";
    document.getElementById("pedido").style.backgroundColor = "";
    document.getElementById("reclamo").style.backgroundColor = "";
    document.getElementById("direccion").style.backgroundColor = "";
    document.getElementById("direccion").style.outlineColor = "";
    document.getElementById("telefono").style.backgroundColor = "";
    document.getElementById("telefono").style.outlineColor = "";
    document.getElementById("email").style.backgroundColor = "";
    document.getElementById("email").style.outlineColor = "";
}

function irPedidos() {
    window.location.href = "pedidos.html";
}

function irReclamos() {
    window.location.href = "reclamos.html";
}