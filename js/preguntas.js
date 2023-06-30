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
}

function modoOscuro() {
    document.getElementById("modoOscuro").style.display = "";
    document.getElementById("principal").style.backgroundImage = "";
    document.getElementById("superior").style.backgroundColor = "";
    document.getElementById("pie").style.backgroundColor = "";
    document.getElementById("centro").style.backgroundColor = "";
}

function mostrarR1() {
    document.getElementById("respuesta1").style.display = "list-item";
    document.getElementById("ocultar1").style.display = "inline";
    document.getElementById("mostrar1").style.display = "none";
}

function ocultarR1() {
    document.getElementById("respuesta1").style.display = "";
    document.getElementById("ocultar1").style.display = "";
    document.getElementById("mostrar1").style.display = "";
}

function mostrarR2() {
    document.getElementById("respuesta2").style.display = "list-item";
    document.getElementById("ocultar2").style.display = "inline";
    document.getElementById("mostrar2").style.display = "none";
}

function ocultarR2() {
    document.getElementById("respuesta2").style.display = "";
    document.getElementById("ocultar2").style.display = "";
    document.getElementById("mostrar2").style.display = "";
}

function mostrarR3() {
    document.getElementById("respuesta3").style.display = "list-item";
    document.getElementById("ocultar3").style.display = "inline";
    document.getElementById("mostrar3").style.display = "none";
}

function ocultarR3() {
    document.getElementById("respuesta3").style.display = "";
    document.getElementById("ocultar3").style.display = "";
    document.getElementById("mostrar3").style.display = "";
}

function mostrarR4() {
    document.getElementById("respuesta4").style.display = "list-item";
    document.getElementById("ocultar4").style.display = "inline";
    document.getElementById("mostrar4").style.display = "none";
}

function ocultarR4() {
    document.getElementById("respuesta4").style.display = "";
    document.getElementById("ocultar4").style.display = "";
    document.getElementById("mostrar4").style.display = "";
}

function mostrarR5() {
    document.getElementById("respuesta5").style.display = "list-item";
    document.getElementById("ocultar5").style.display = "inline";
    document.getElementById("mostrar5").style.display = "none";
}

function ocultarR5() {
    document.getElementById("respuesta5").style.display = "";
    document.getElementById("ocultar5").style.display = "";
    document.getElementById("mostrar5").style.display = "";
}

function mostrarR6() {
    document.getElementById("respuesta6").style.display = "list-item";
    document.getElementById("ocultar6").style.display = "inline";
    document.getElementById("mostrar6").style.display = "none";
}

function ocultarR6() {
    document.getElementById("respuesta6").style.display = "";
    document.getElementById("ocultar6").style.display = "";
    document.getElementById("mostrar6").style.display = "";
}

function mostrarR7() {
    document.getElementById("respuesta7").style.display = "list-item";
    document.getElementById("ocultar7").style.display = "inline";
    document.getElementById("mostrar7").style.display = "none";
}

function ocultarR7() {
    document.getElementById("respuesta7").style.display = "";
    document.getElementById("ocultar7").style.display = "";
    document.getElementById("mostrar7").style.display = "";
}