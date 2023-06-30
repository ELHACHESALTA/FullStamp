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
    for (i = 0; i < document.getElementsByClassName("tarjeta-articulo").length; i++) {
        document.getElementsByClassName("tarjeta-articulo")[i].style.backgroundColor = "#5FFF9E";
        document
            .getElementsByClassName("tarjeta-articulo")[i]
            .getElementsByTagName("button")[0].style.color = "#5FFF9E";
        document
            .getElementsByClassName("tarjeta-articulo")[i]
            .getElementsByTagName("button")[1].style.color = "#5FFF9E";
    }
    for (i = 0; i < document.getElementsByClassName("botones-compra").length; i++) {
        document.getElementsByClassName("botones-compra")[i].style.backgroundColor = "#5FFF9E";
    }
    for (i = 0; i < document.getElementsByClassName("botonesCarrito").length; i++) {
        document.getElementsByClassName("botonesCarrito")[i].style.color = "#5FFF9E";
    }
}

function modoOscuro() {
    var i;
    document.getElementById("modoOscuro").style.display = "";
    document.getElementById("principal").style.backgroundImage = "";
    document.getElementById("superior").style.backgroundColor = "";
    document.getElementById("pie").style.backgroundColor = "";
    document.getElementById("centro").style.backgroundColor = "";
    for (i = 0; i < document.getElementsByClassName("tarjeta-articulo").length; i++) {
        document.getElementsByClassName("tarjeta-articulo")[i].style.backgroundColor = "";
        document
            .getElementsByClassName("tarjeta-articulo")[i]
            .getElementsByTagName("button")[0].style.color = "";
        document
            .getElementsByClassName("tarjeta-articulo")[i]
            .getElementsByTagName("button")[1].style.color = "";
    }
    for (i = 0; i < document.getElementsByClassName("botones-compra").length; i++) {
        document.getElementsByClassName("botones-compra")[i].style.backgroundColor = "";
    }
    for (i = 0; i < document.getElementsByClassName("botonesCarrito").length; i++) {
        document.getElementsByClassName("botonesCarrito")[i].style.color = "";
    }
}

var contenedorTarjetas = document.getElementById("articulos-container");
var unidadesElement = document.getElementById("unidades");
var precioElement = document.getElementById("precio");
var carritoVacioElement = document.getElementById("carroVacio");
var totalesElement = document.getElementById("totales");
var reiniciarCarritoElement = document.getElementById("reiniciarCarro");


// Si no tengo artículos en el localStorage muestra un mensaje y oculta los botones de acciones de compra.
function revisarMensajeVacio() {
    // JSON.parse construye un JavaScript a partir de un string JSON.
    var articulos = JSON.parse(localStorage.getItem("articulos"));
    // toggle permite cada vez que se ejecute cambiar de estado la visibilidad del elemento HTML.
    carritoVacioElement.classList.toggle("escondido", articulos && articulos.length > 0);
    totalesElement.classList.toggle("escondido", !(articulos && articulos.length > 0));
}

revisarMensajeVacio();

// Actualiza el valor total de la suma de unidades e importes.
function actualizarTotales() {
    var articulos = JSON.parse(localStorage.getItem("articulos"));
    var unidades = 0;
    var precio = 0;
    if (articulos && articulos.length > 0) {
        articulos.forEach(articulo => {
            unidades += articulo.cantidad;
            precio += articulo.precio * articulo.cantidad;
        });
        unidadesElement.innerText = unidades;
        precioElement.innerText = precio;
    }
    revisarMensajeVacio();
}

actualizarTotales();

// Crea la caja de los artículos agregados al carrito.html desde la tienda de cualquier categoría (remeras, buzos o gorras).
function crearTarjetasArticulos() {
    contenedorTarjetas.innerHTML = "";
    // JSON.parse construye un JavaScript a partir de un string JSON.
    var articulos = JSON.parse(localStorage.getItem("articulos"));
    if (articulos && articulos.length > 0) {
        articulos.forEach(articulo => {
            var nuevoArticulo = document.createElement("div");
            nuevoArticulo.classList = "tarjeta-articulo";
            if(articulo.id < 10) {
                // innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento. Al establecerse se remplaza la sintaxis HTML del elemento por la nueva.
                nuevoArticulo.innerHTML = `
                    <img src="./img/remeras/${articulo.id}.jpg">
                    <h3>${articulo.nombre}</h3>
                    <p>$${articulo.precio}</p>
                    <div class="botones-compra">
                        <button class="buttonCarro">-</button>
                        <span class="cantidad">${articulo.cantidad}</span>
                        <button class="buttonCarro">+</button>
                    </div>
                `;
            } else if (articulo.id > 10 && articulo.id < 20) {
                // innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento. Al establecerse se remplaza la sintaxis HTML del elemento por la nueva.
            nuevoArticulo.innerHTML = `
                <img src="./img/buzos/${articulo.id}.jpg">
                <h3>${articulo.nombre}</h3>
                <p>$${articulo.precio}</p>
                <div class="botones-compra">
                    <button class="buttonCarro">-</button>
                    <span class="cantidad">${articulo.cantidad}</span>
                    <button class="buttonCarro">+</button>
                </div>
            `;
            } else if (articulo.id > 20) {
                // innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento. Al establecerse se remplaza la sintaxis HTML del elemento por la nueva.
            nuevoArticulo.innerHTML = `
                <img src="./img/gorras/${articulo.id}.jpg">
                <h3>${articulo.nombre}</h3>
                <p>$${articulo.precio}</p>
                <div class="botones-compra">
                    <button class="buttonCarro">-</button>
                    <span class="cantidad">${articulo.cantidad}</span>
                    <button class="buttonCarro">+</button>
                </div>
            `;
            }
            // appendChild agrega un nuevo nodo al final de la lista de un elemento hijo, de un elemento padre especificado.
            contenedorTarjetas.appendChild(nuevoArticulo);
            nuevoArticulo
                .getElementsByTagName("button")[1]
                .addEventListener("click", (e) => {
                    agregarAlCarrito(articulo);
                    crearTarjetasArticulos();
                    actualizarTotales();
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
            nuevoArticulo
                .getElementsByTagName("button")[0]
                .addEventListener("click", (e) => {
                    restarAlCarrito(articulo);
                    crearTarjetasArticulos();
                    actualizarTotales();
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
        });
    }
}

crearTarjetasArticulos();

// Borra todos los artículos del localStorage y por lo tanto del carrito.html.
function reiniciarCarrito() {
    // removeItem elimina la Key del localStorage coincidente con la enviada por parámetro.
    localStorage.removeItem("articulos");
    actualizarTotales();
    crearTarjetasArticulos();
    actualizarNumeroCarrito();
}

reiniciarCarritoElement.addEventListener("click", reiniciarCarrito);

// Realizo la compra y vacío el carrito.
function realizarCompra() {
    alert("Muchas gracias por su compra!");
    reiniciarCarrito()
}