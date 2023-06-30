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
    var i;
    document.getElementById("modoOscuro").style.display = "inline";
    document.getElementById("principal").style.backgroundImage = "url('img/lightFondo.png')";
    document.getElementById("superior").style.backgroundColor = "#5FFF9E";
    document.getElementById("pie").style.backgroundColor = "#00E059";
    document.getElementById("centro").style.backgroundColor = "rgba(183,255,211,95%)";
    document.getElementById("banner").style.backgroundImage = "url('img/lightBanner.png')";
    for (i = 0; i < document.getElementsByClassName("tarjeta-articulo").length; i++) {
        document.getElementsByClassName("tarjeta-articulo")[i].style.backgroundColor = "#5FFF9E";
        document
            .getElementsByClassName("tarjeta-articulo")[i]
            .getElementsByTagName("button")[0].style.color = "#5FFF9E";
    }
}

function modoOscuro() {
    var i;
    document.getElementById("modoOscuro").style.display = "";
    document.getElementById("principal").style.backgroundImage = "";
    document.getElementById("superior").style.backgroundColor = "";
    document.getElementById("pie").style.backgroundColor = "";
    document.getElementById("centro").style.backgroundColor = "";
    document.getElementById("banner").style.backgroundImage = "";
    for (i = 0; i < document.getElementsByClassName("tarjeta-articulo").length; i++) {
        document.getElementsByClassName("tarjeta-articulo")[i].style.backgroundColor = "";
        document
            .getElementsByClassName("tarjeta-articulo")[i]
            .getElementsByTagName("button")[0].style.color = "";
    }
}

function animarTitulo() {
    document.getElementById("titulo").style.transitionDuration = "2s";
    document.getElementById("titulo").style.fontSize = "120px";
}

animarTitulo();

var contenedorTarjetas = document.getElementById("articulos-container");

function crearTarjetasGorras(articulos) {
    articulos.forEach(articulo => {
        var nuevaGorra = document.createElement("div");
        nuevaGorra.classList = "tarjeta-articulo";
        // innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento. Al establecerse se remplaza la sintaxis HTML del elemento por la nueva.
        nuevaGorra.innerHTML = `
            <img src="./img/gorras/${articulo.id}.jpg">
            <h3>${articulo.nombre}</h3>
            <p>$${articulo.precio}</p>
            <button>Agregar al carrito</button>
        `;
        // appendChild agrega un nuevo nodo al final de la lista de un elemento hijo, de un elemento padre especificado.
        contenedorTarjetas.appendChild(nuevaGorra);
        nuevaGorra
            .getElementsByTagName("button")[0]
            .addEventListener("click", () => agregarAlCarrito(articulo));
    });
}

crearTarjetasGorras(gorras);