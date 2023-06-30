function irIndex() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function() {
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
    document.getElementById("formEnviar").style.backgroundColor = "#5FFF9E";
    document.getElementById("formCancelar").style.backgroundColor = "#5FFF9E";
    document.getElementById("formEnvioExito").style.backgroundColor = "#5FFF9E";
}

function modoOscuro() {
    document.getElementById("modoOscuro").style.display = "";
    document.getElementById("principal").style.backgroundImage = "";
    document.getElementById("superior").style.backgroundColor = "";
    document.getElementById("pie").style.backgroundColor = "";
    document.getElementById("centro").style.backgroundColor = "";
    document.getElementById("formEnviar").style.backgroundColor = "";
    document.getElementById("formCancelar").style.backgroundColor = "";
    document.getElementById("formEnvioExito").style.backgroundColor = "";
}

function cancelarFormulario() {
    window.history.back();
}

// Arreglo de expresiones regulares necesarias para las comprobaciones
var expresiones = {
    nombreApellido: /^([a-zñüáéíóúA-ZÑÜÁÉÍÓÚ"]+)(\s+([a-zñüáéíóúA-ZÑÜÁÉÍÓÚ"]+))*$/,
    telefono: /^[0-9]{10}$/,
    email: /^(?!([0-9]))\w+([.-_]?\w+)*@\w+([.-]?\w+)*(\.[a-zA-Z]{2,10})+$/,
    fecha: /^(?:(?:0?[1-9]|1\d|2[0-8])(\/|-)(?:0?[1-9]|1[0-2]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:31(\/|-)(?:0?[13578]|1[02]))|(?:(?:29|30)(\/|-)(?:0?[1,3-9]|1[0-2])))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(29(\/|-)0?2)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
    cantidad: /^[1-9][0-9]{0,3}$/,
    monto: /^[0-9]+(\.|\,)[0-9]{2}$/ 
};

// Guardo el estado de los campos en las distintas validaciones y corroboro este estado antes de enviar el formulario.
var validacionForm = {
    formNombre: false,
    formApellido: false,
    opcionContacto: false,
    opcionCliente: false,
    formFecha: false,
    formCantidad: false,
    formMonto: false,
    formTextArea: false,
}

// Valida cada uno de los campos de mi formulario.
var validarFormulario = (event) => {
    switch (event.target.name) {
        case "formNombre":
            if (expresiones.nombreApellido.test(event.target.value)) {
                document.getElementById("formNombre").style.backgroundColor = "";
                document.getElementById("grupo_formNombre").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupo_formNombre").classList.add("formGrupo-correcto");
                document.querySelector("#grupo_formNombre i").classList.add("fa-check-circle");
                document.querySelector("#grupo_formNombre i").classList.remove("fa-times-circle");
                document.getElementById("formNombreError").style.display = "";
                validacionForm.formNombre = true;
            } else {
                document.getElementById("formNombre").style.backgroundColor = "";
                document.getElementById("grupo_formNombre").classList.add("formGrupo-incorrecto");
                document.getElementById("grupo_formNombre").classList.remove("formGrupo-correcto");
                document.querySelector("#grupo_formNombre i").classList.add("fa-times-circle");
                document.querySelector("#grupo_formNombre i").classList.remove("fa-check-circle");
                document.getElementById("formNombreError").style.display = "block";
                validacionForm.formNombre = false;
            }
        break;
        case "formApellido":
            if (expresiones.nombreApellido.test(event.target.value)) {
                document.getElementById("formApellido").style.backgroundColor = "";
                document.getElementById("grupo_formApellido").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupo_formApellido").classList.add("formGrupo-correcto");
                document.querySelector("#grupo_formApellido i").classList.add("fa-check-circle");
                document.querySelector("#grupo_formApellido i").classList.remove("fa-times-circle");
                document.getElementById("formApellidoError").style.display = "";
                validacionForm.formApellido = true;
            } else {
                document.getElementById("formApellido").style.backgroundColor = "";
                document.getElementById("grupo_formApellido").classList.add("formGrupo-incorrecto");
                document.getElementById("grupo_formApellido").classList.remove("formGrupo-correcto");
                document.querySelector("#grupo_formApellido i").classList.add("fa-times-circle");
                document.querySelector("#grupo_formApellido i").classList.remove("fa-check-circle");
                document.getElementById("formApellidoError").style.display = "block";
                validacionForm.formApellido = false;
            }
        break;
        case "formTelefono":
            if (expresiones.telefono.test(event.target.value)) {
                document.getElementById("formTelefono").style.backgroundColor = "";
                document.getElementById("grupo_formContacto").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupo_formContacto").classList.add("formGrupo-correcto");
                document.querySelector("#grupo_formContacto i").classList.add("fa-check-circle");
                document.querySelector("#grupo_formContacto i").classList.remove("fa-times-circle");
                document.getElementById("formTelefonoError").style.display = "";
                validacionForm.opcionContacto = true;
            } else {
                document.getElementById("formTelefono").style.backgroundColor = "";
                document.getElementById("grupo_formContacto").classList.add("formGrupo-incorrecto");
                document.getElementById("grupo_formContacto").classList.remove("formGrupo-correcto");
                document.querySelector("#grupo_formContacto i").classList.add("fa-times-circle");
                document.querySelector("#grupo_formContacto i").classList.remove("fa-check-circle");
                document.getElementById("formTelefonoError").style.display = "block";
                validacionForm.opcionContacto = false;
            }
        break;
        case "formEmail":
            if (expresiones.email.test(event.target.value)) {
                document.getElementById("formEmail").style.backgroundColor = "";
                document.getElementById("grupo_formContacto").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupo_formContacto").classList.add("formGrupo-correcto");
                document.querySelector("#grupo_formContacto i").classList.add("fa-check-circle");
                document.querySelector("#grupo_formContacto i").classList.remove("fa-times-circle");
                document.getElementById("formEmailError").style.display = "";
                validacionForm.opcionContacto = true;
            } else {
                document.getElementById("formEmail").style.backgroundColor = "";
                document.getElementById("grupo_formContacto").classList.add("formGrupo-incorrecto");
                document.getElementById("grupo_formContacto").classList.remove("formGrupo-correcto");
                document.querySelector("#grupo_formContacto i").classList.add("fa-times-circle");
                document.querySelector("#grupo_formContacto i").classList.remove("fa-check-circle");
                document.getElementById("formEmailError").style.display = "block";
                validacionForm.opcionContacto = false;
            }
        break;
        case "formFecha":
            if (expresiones.fecha.test(event.target.value)) {
                var comprobacion = validarFechaExiste(event.target.value);
                if (comprobacion) {
                    document.getElementById("formFecha").style.backgroundColor = "";
                    document.getElementById("grupo_formFecha").classList.remove("formGrupo-incorrecto");
                    document.getElementById("grupo_formFecha").classList.add("formGrupo-correcto");
                    document.querySelector("#grupo_formFecha i").classList.add("fa-check-circle");
                    document.querySelector("#grupo_formFecha i").classList.remove("fa-times-circle");
                    document.getElementById("formFechaError").style.display = "";
                    validacionForm.formFecha = true;
                } else {
                    document.getElementById("formFecha").style.backgroundColor = "";
                    document.getElementById("grupo_formFecha").classList.add("formGrupo-incorrecto");
                    document.getElementById("grupo_formFecha").classList.remove("formGrupo-correcto");
                    document.querySelector("#grupo_formFecha i").classList.add("fa-times-circle");
                    document.querySelector("#grupo_formFecha i").classList.remove("fa-check-circle");
                    document.getElementById("formFechaError").style.display = "block";
                    validacionForm.formFecha = false;
                }
            } else {
                document.getElementById("formFecha").style.backgroundColor = "";
                document.getElementById("grupo_formFecha").classList.add("formGrupo-incorrecto");
                document.getElementById("grupo_formFecha").classList.remove("formGrupo-correcto");
                document.querySelector("#grupo_formFecha i").classList.add("fa-times-circle");
                document.querySelector("#grupo_formFecha i").classList.remove("fa-check-circle");
                document.getElementById("formFechaError").style.display = "block";
                validacionForm.formFecha = false;
            }
        break;
        case "formCantidad":
            if (expresiones.cantidad.test(event.target.value)) {
                document.getElementById("formCantidad").style.backgroundColor = "";
                document.getElementById("grupo_formCantidad").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupo_formCantidad").classList.add("formGrupo-correcto");
                document.querySelector("#grupo_formCantidad i").classList.add("fa-check-circle");
                document.querySelector("#grupo_formCantidad i").classList.remove("fa-times-circle");
                document.getElementById("formCantidadError").style.display = "";
                validacionForm.formCantidad = true;
            } else {
                document.getElementById("formCantidad").style.backgroundColor = "";
                document.getElementById("grupo_formCantidad").classList.add("formGrupo-incorrecto");
                document.getElementById("grupo_formCantidad").classList.remove("formGrupo-correcto");
                document.querySelector("#grupo_formCantidad i").classList.add("fa-times-circle");
                document.querySelector("#grupo_formCantidad i").classList.remove("fa-check-circle");
                document.getElementById("formCantidadError").style.display = "block";
                validacionForm.formCantidad = false;
            }
        break;
        case "formMonto":
            if (expresiones.monto.test(event.target.value)) {
                document.getElementById("formMonto").style.backgroundColor = "";
                document.getElementById("grupo_formMonto").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupo_formMonto").classList.add("formGrupo-correcto");
                document.querySelector("#grupo_formMonto i").classList.add("fa-check-circle");
                document.querySelector("#grupo_formMonto i").classList.remove("fa-times-circle");
                document.getElementById("formMontoError").style.display = "";
                validacionForm.formMonto = true;
            } else {
                document.getElementById("formMonto").style.backgroundColor = "";
                document.getElementById("grupo_formMonto").classList.add("formGrupo-incorrecto");
                document.getElementById("grupo_formMonto").classList.remove("formGrupo-correcto");
                document.querySelector("#grupo_formMonto i").classList.add("fa-times-circle");
                document.querySelector("#grupo_formMonto i").classList.remove("fa-check-circle");
                document.getElementById("formMontoError").style.display = "block";
                validacionForm.formMonto = false;
            }
        break;
        case "formTextArea":
            if ((textArea.value) != "") {
                document.getElementById("formTextArea").style.backgroundColor = "";
                document.getElementById("grupo_formTextArea").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupo_formTextArea").classList.add("formGrupo-correcto");
                document.querySelector("#grupo_formTextArea i").classList.add("fa-check-circle");
                document.querySelector("#grupo_formTextArea i").classList.remove("fa-times-circle");
                document.getElementById("formTextAreaError").style.display = "";
                validacionForm.formTextArea = true;
            } else {
                document.getElementById("formTextArea").style.backgroundColor = "";
                document.getElementById("grupo_formTextArea").classList.add("formGrupo-incorrecto");
                document.getElementById("grupo_formTextArea").classList.remove("formGrupo-correcto");
                document.querySelector("#grupo_formTextArea i").classList.add("fa-times-circle");
                document.querySelector("#grupo_formTextArea i").classList.remove("fa-check-circle");
                document.getElementById("formTextAreaError").style.display = "block";
                validacionForm.formTextArea = false;
            }
        break;
    }
};

// Valida el formulario cada vez que levanto una tecla o saco el mouse del textarea.
var textArea = document.getElementById("formTextArea");
textArea.addEventListener("keyup", validarFormulario);
textArea.addEventListener("blur", validarFormulario);

// Valida el formulario cada vez que levanto una tecla o saco el mouse de un input.
var inputs = document.querySelectorAll("#formularioPedidos input");
inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

// Evento que captura el boton submit y previene que el formulario se envíe por default.
// También controla es el estado de los campos validados y muestra un cartel dependiendo la situación.
var formulario = document.getElementById("formularioPedidos");
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    marcarCamposVacios();
    if(validacionForm.formNombre && validacionForm.formApellido && validacionForm.opcionContacto && validacionForm.formTextArea) {
        if (!validacionForm.opcionCliente) {
            document.getElementById("formEnvioExito").style.display = "block";
            document.getElementById("formEnvioError").style.display = "none";
        } else {
            if (!validacionForm.opcionCliente || !validacionForm.formCantidad || !validacionForm.formMonto) {
                document.getElementById("formEnvioExito").style.display = "none";
                document.getElementById("formEnvioError").style.display = "block";
            } else {
                document.getElementById("formEnvioExito").style.display = "block";
                document.getElementById("formEnvioError").style.display = "none";
            }
        }
    } else {
        document.getElementById("formEnvioExito").style.display = "none";
        document.getElementById("formEnvioError").style.display = "block";
    }
});

// Cambia el color de lo inputs seleccionados.
function marcarCamposVacios() {
    var elementos = [
        document.getElementById("formNombre"),
        document.getElementById("formApellido"),
        document.getElementById("formVacio"),
        document.getElementById("formTelefono"),
        document.getElementById("formEmail"),
        document.getElementById("formFecha"),
        document.getElementById("formCantidad"),
        document.getElementById("formMonto"),
        document.getElementById("formTextArea")
    ];
    elementos.forEach(e => {
        if (e.id == "formNombre") {
            if (!(expresiones.nombreApellido.test(e.value))) {
                e.style.backgroundColor = "#FFB6C1";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            } else {
                document.getElementById("formEnvioExito").style.display = "block";
                document.getElementById("formEnvioError").style.display = "";
            }
        } else if (e.id == "formApellido") {
            if (!(expresiones.nombreApellido.test(e.value))) {
                e.style.backgroundColor = "#FFB6C1";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            } else {
                document.getElementById("formEnvioExito").style.display = "block";
                document.getElementById("formEnvioError").style.display = "";
            }
        } else if (e.id == "formTelefono") {
            if (!(expresiones.telefono.test(e.value))) {
                e.style.backgroundColor = "#FFB6C1";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            } else {
                document.getElementById("formEnvioExito").style.display = "block";
                document.getElementById("formEnvioError").style.display = "";
            }
        } else if (e.id == "formEmail") {
            if (!(expresiones.email.test(e.value))) {
                e.style.backgroundColor = "#FFB6C1";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            } else {
                document.getElementById("formEnvioExito").style.display = "block";
                document.getElementById("formEnvioError").style.display = "";
            }
        } else if (e.id == "formFecha") {
            if (!(expresiones.fecha.test(e.value))) {
                e.style.backgroundColor = "#FFB6C1";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            } else {
                document.getElementById("formEnvioExito").style.display = "block";
                document.getElementById("formEnvioError").style.display = "";
            }
        } else if (e.id == "formCantidad") {
            if (!(expresiones.cantidad.test(e.value))) {
                e.style.backgroundColor = "#FFB6C1";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            } else {
                document.getElementById("formEnvioExito").style.display = "block";
                document.getElementById("formEnvioError").style.display = "";
            }
        } else if (e.id == "formMonto") {
            if (!(expresiones.monto.test(e.value))) {
                e.style.backgroundColor = "#FFB6C1";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            } else {
                document.getElementById("formEnvioExito").style.display = "block";
                document.getElementById("formEnvioError").style.display = "";
            }
        } else if (e.value == "") {
            e.style.backgroundColor = "#FFB6C1";
            document.getElementById("formEnvioError").style.display = "block";
            document.getElementById("formEnvioExito").style.display = "";
        } else {
            document.getElementById("formEnvioExito").style.display = "block";
            document.getElementById("formEnvioError").style.display = "";
        }
    });
}

// Según lo elegido en #opcionesContacto, cambia el input correspondiente.
function cambioOpciones() {
    var elementoOpcion = document.getElementById("opcionesContacto");
    var opcion = elementoOpcion.value;
    document.getElementById("grupo_formContacto").classList.remove("formGrupo-incorrecto");
    document.getElementById("grupo_formContacto").classList.remove("formGrupo-correcto");
    switch (opcion) {
        case "opc0":
            document.getElementById("formVacio").style.backgroundColor = "";
            document.getElementById("formTelefono").style.backgroundColor = "";
            document.getElementById("formEmail").style.backgroundColor = "";
            document.getElementById("formVacio").style.display = "initial";
            document.getElementById("formTelefono").style.display = "none";
            document.getElementById("formEmail").style.display = "none";
            document.getElementById("formTelefonoError").style.display = "";
            document.getElementById("formTelefono").value = "";
            document.getElementById("formEmailError").style.display = "";
            document.getElementById("formEmail").value = "";
            validacionForm.opcionContacto = false;
            break;
        case "opc1":
            document.getElementById("formVacio").style.backgroundColor = "";
            document.getElementById("formTelefono").style.backgroundColor = "";
            document.getElementById("formEmail").style.backgroundColor = "";
            document.getElementById("formVacio").style.display = "none";
            document.getElementById("formTelefono").style.display = "initial";
            document.getElementById("formEmail").style.display = "none";
            document.getElementById("formTelefono").addEventListener("keyup", validarFormulario);
            document.getElementById("formTelefono").addEventListener("blur", validarFormulario);
            document.getElementById("formEmailError").style.display = "";
            document.getElementById("formEmail").value = "";
            break;
        case "opc2":
            document.getElementById("formVacio").style.backgroundColor = "";
            document.getElementById("formTelefono").style.backgroundColor = "";
            document.getElementById("formEmail").style.backgroundColor = "";
            document.getElementById("formVacio").style.display = "none";
            document.getElementById("formTelefono").style.display = "none";
            document.getElementById("formEmail").style.display = "initial";
            document.getElementById("formEmail").addEventListener("keyup", validarFormulario);
            document.getElementById("formEmail").addEventListener("blur", validarFormulario);
            document.getElementById("formTelefonoError").style.display = "";
            document.getElementById("formTelefono").value = "";
            break;
    }
}

// Evento que captura cambios en lo elegido en #opcionesContacto
var opcionesContacto = document.getElementById("opcionesContacto");
opcionesContacto.addEventListener("change", cambioOpciones);

// Según lo elegido en #opcionesContacto, muestra los inputs correspondientes.
function mostrarCompra() {
    document.getElementById("grupo_formFecha").style.display = "block";
    document.getElementById("formCantidadMonto").style.display = "table-row";
}

// Según lo elegido en #opcionesContacto, oculta los inputs correspondientes.
function ocultarCompra() {
    document.getElementById("grupo_formFecha").style.display = "";
    document.getElementById("formCantidadMonto").style.display = "";
}

// Evento que captura cambios en lo elegido en #opcionesCompra
var opcionCompraSi = document.getElementById("compraSi");
if (opcionCompraSi.addEventListener("change", mostrarCompra)) {
    validacionForm.opcionCliente = true;
}
var opcionCompraNo = document.getElementById("compraNo");
if (opcionCompraNo.addEventListener("change", ocultarCompra)) {
    validacionForm.opcionCliente = false;
}

// Valida que la fecha no supere la fecha actual.
function validarFechaExiste(fecha) {
    var dia = fecha.split("/")[0];
    var mes = fecha.split("/")[1];
    var anio = fecha.split("/")[2];
    var fechaActual = new Date();
    var diaActual = fechaActual.getDate();
    var mesActual = fechaActual.getMonth() + 1;
    var anioActual = fechaActual.getFullYear();
    var resultado = true;
    if (parseInt(anio) == anioActual) {
        if (parseInt(mes) == mesActual) {
            if (parseInt(dia) > diaActual) {
                resultado = false;
            }
        } else if (parseInt(mes) > mesActual) {
            resultado = false;
        }
    } else if (parseInt(anio) > anioActual) {
        resultado = false;
    }
    return resultado;
}