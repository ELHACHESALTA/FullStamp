// Toma un producto, le agrega cantidad 1 y lo devuelve.
function getNuevoArticuloParaMemoria(articulo) {
    var nuevoArticulo = articulo;
    nuevoArticulo.cantidad = 1;
    return nuevoArticulo;
}

var cuentaCarroElement = document.getElementById("cuentaCarro");

// Actualiza el número del ícono carro
function actualizarNumeroCarrito() {
    var memoria = JSON.parse(localStorage.getItem("articulos"));
    if (memoria && memoria.length > 0) {
        // reduce es una función que actúa sobre cada elemento de un arreglo devolviendo un único valor (acumulado).
        var cuenta = memoria.reduce((acum, current) => acum+current.cantidad, 0);
        // innerText devuelve o en este caso setea texto contenido en un elemento.
        cuentaCarroElement.innerText = cuenta;
    } else {
        cuentaCarroElement.innerText = 0;
    }
}

actualizarNumeroCarrito();

// Suma al localStorage el artículo coincidente que se ve reflejado en carrito.html.
function agregarAlCarrito(articulo) {
    // JSON.parse construye un JavaScript a partir de un string JSON.
    var memoria = JSON.parse(localStorage.getItem("articulos"));
    if(!memoria) {
        var nuevoArticulo = getNuevoArticuloParaMemoria(articulo);
        // JSON.stringify convierte un valor JavaScript en un string JSON para ser almacenado en el LocalStorage.
        localStorage.setItem("articulos", JSON.stringify([nuevoArticulo]));
    } else {
        // findIndex ejecuta una función una vez por cada índice de un arreglo hasta encontrar uno donde dicha función retorne verdadero.
        // Para eso tengo que convertir memoria a un arreglo, ya que lo recupero del localStorage como un string JSON (var memoria).
        var indiceArticulo = memoria.findIndex(articuloCarro => articuloCarro.id === articulo.id);
        var nuevaMemoria = memoria;
        if (indiceArticulo === -1) {
            nuevaMemoria.push(getNuevoArticuloParaMemoria(articulo));
        } else {
            nuevaMemoria[indiceArticulo].cantidad++;
        }
        localStorage.setItem("articulos", JSON.stringify(nuevaMemoria));
    }
    actualizarNumeroCarrito();
}

// Resta del localStorage el artículo coincidente que se ve reflejado en carrito.html.
function restarAlCarrito(articulo) {
        // JSON.parse construye un JavaScript a partir de un string JSON.
        var memoria = JSON.parse(localStorage.getItem("articulos"));
        // findIndex ejecuta una función una vez por cada índice de un arreglo hasta encontrar uno donde dicha función retorne verdadero (Para eso tengo que convertir memoria a un arreglo, ya que lo recupero del localStorage como un string JSON).
        var indiceArticulo = memoria.findIndex(articuloCarro => articuloCarro.id === articulo.id);
        if (memoria[indiceArticulo].cantidad === 1) {
            // splice cambia el contenido de un arreglo eliminando elementos existentes (como en este caso) y/o agregando nuevos.
            memoria.splice(indiceArticulo, 1);
        } else {
            memoria[indiceArticulo].cantidad --;
        }
        localStorage.setItem("articulos", JSON.stringify(memoria));
        actualizarNumeroCarrito();
}