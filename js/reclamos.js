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
    email: /^(?!([0-9]))\w+([.-_]?\w+)*@\w+([.-]?\w+)*(\.[a-zA-Z]{2,10})+$/
};

// Guardo el estado de los campos en las distintas validaciones y corroboro este estado antes de enviar el formulario.
var validacionForm = {
    formNombre: false,
    formApellido: false,
    opcionContacto: false,
    formTextArea: false,
}

// Valida cada uno de los campos de mi formulario.
var validarFormulario = (event) => {
    switch (event.target.name) {
        case "formNombre":
            if (event.target.value == "") {
                document.getElementById("formNombre").style.backgroundColor = "";
                document.getElementById("grupo_formNombre").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupo_formNombre").classList.remove("formGrupo-correcto");
                // querySelector devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
                document.querySelector("#grupo_formNombre i").classList.remove("fa-times-circle");
                document.querySelector("#grupo_formNombre i").classList.remove("fa-check-circle");
                validacionForm.formNombre = true;
            } else if (expresiones.nombreApellido.test(event.target.value)) {
                document.getElementById("formNombre").style.backgroundColor = "";
                document.getElementById("grupo_formNombre").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupo_formNombre").classList.add("formGrupo-correcto");
                // querySelector devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
                document.querySelector("#grupo_formNombre i").classList.add("fa-check-circle");
                document.querySelector("#grupo_formNombre i").classList.remove("fa-times-circle");
                validacionForm.formNombre = true;
            } else {
                document.getElementById("formNombre").style.backgroundColor = "";
                document.getElementById("grupo_formNombre").classList.add("formGrupo-incorrecto");
                document.getElementById("grupo_formNombre").classList.remove("formGrupo-correcto");
                // querySelector devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
                document.querySelector("#grupo_formNombre i").classList.add("fa-times-circle");
                document.querySelector("#grupo_formNombre i").classList.remove("fa-check-circle");
                validacionForm.formNombre = false;
            }
        break;
        case "formApellido":
            if (event.target.value == "") {
                document.getElementById("formNombre").style.backgroundColor = "";
                document.getElementById("grupo_formApellido").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupo_formApellido").classList.remove("formGrupo-correcto");
                // querySelector devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
                document.querySelector("#grupo_formApellido i").classList.remove("fa-times-circle");
                document.querySelector("#grupo_formApellido i").classList.remove("fa-check-circle");
                validacionForm.formApellido = true;
            } else if (expresiones.nombreApellido.test(event.target.value)) {
                document.getElementById("formApellido").style.backgroundColor = "";
                document.getElementById("grupo_formApellido").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupo_formApellido").classList.add("formGrupo-correcto");
                // querySelector devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
                document.querySelector("#grupo_formApellido i").classList.add("fa-check-circle");
                document.querySelector("#grupo_formApellido i").classList.remove("fa-times-circle");
                validacionForm.formApellido = true;
            } else {
                document.getElementById("formApellido").style.backgroundColor = "";
                document.getElementById("grupo_formApellido").classList.add("formGrupo-incorrecto");
                document.getElementById("grupo_formApellido").classList.remove("formGrupo-correcto");
                // querySelector devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
                document.querySelector("#grupo_formApellido i").classList.add("fa-times-circle");
                document.querySelector("#grupo_formApellido i").classList.remove("fa-check-circle");
                validacionForm.formApellido = false;
            }
        break;
        case "formTelefono":
            if (expresiones.telefono.test(event.target.value)) {
                document.getElementById("formTelefono").style.backgroundColor = "";
                document.getElementById("grupo_formContacto").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupo_formContacto").classList.add("formGrupo-correcto");
                // querySelector devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
                document.querySelector("#grupo_formContacto i").classList.add("fa-check-circle");
                document.querySelector("#grupo_formContacto i").classList.remove("fa-times-circle");
                document.getElementById("formTelefonoError").style.display = "";
                validacionForm.opcionContacto = true;
            } else {
                document.getElementById("formTelefono").style.backgroundColor = "";
                document.getElementById("grupo_formContacto").classList.add("formGrupo-incorrecto");
                document.getElementById("grupo_formContacto").classList.remove("formGrupo-correcto");
                // querySelector devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
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
                // querySelector devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
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
        case "formTextArea":
            if ((textArea.value) != "") {
                document.getElementById("formTextArea").style.backgroundColor = "";
                document.getElementById("grupo_formTextArea").classList.remove("formGrupo-incorrecto");
                document.getElementById("grupo_formTextArea").classList.add("formGrupo-correcto");
                // querySelector devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
                document.querySelector("#grupo_formTextArea i").classList.add("fa-check-circle");
                document.querySelector("#grupo_formTextArea i").classList.remove("fa-times-circle");
                document.getElementById("formTextAreaError").style.display = "";
                validacionForm.formTextArea = true;
            } else {
                document.getElementById("formTextArea").style.backgroundColor = "";
                document.getElementById("grupo_formTextArea").classList.add("formGrupo-incorrecto");
                document.getElementById("grupo_formTextArea").classList.remove("formGrupo-correcto");
                // querySelector devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
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

// Valida el formulario cada vez que levanto una tecla o saco el mouse de un input. querySelector devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
var inputs = document.querySelectorAll("#formularioReclamos input");
inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

// Evento que captura el boton submit y previene que el formulario se envíe por default.
// También controla es el estado de los campos validados y muestra un cartel dependiendo la situación.
var formulario = document.getElementById("formularioReclamos");
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    marcarCamposVacios();
    if(validacionForm.formNombre && validacionForm.formApellido && validacionForm.opcionContacto && validacionForm.formTextArea) {
        document.getElementById("formEnvioExito").style.display = "block";
        document.getElementById("formEnvioError").style.display = "none";
    } else {
        document.getElementById("formEnvioExito").style.display = "none";
        document.getElementById("formEnvioError").style.display = "block";
    }
});

// Cambia el color de lo inputs seleccionados.
function marcarCamposVacios() {
    var elementos = [
        document.getElementById("formVacio"),
        document.getElementById("formTelefono"),
        document.getElementById("formEmail"),
        document.getElementById("formTextArea")
    ];
    elementos.forEach(e => {
        var nombre = document.getElementById("formNombre");
        var apellido = document.getElementById("formApellido");
        if (e.id == "formTelefono") {
            if (!(expresiones.telefono.test(e.value)) && nombre.value == "" && apellido.value == "") {
                e.style.backgroundColor = "#FFB6C1";
                nombre.style.backgroundColor = "";
                apellido.style.backgroundColor = "";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            } else if (!(expresiones.telefono.test(e.value)) && !(expresiones.nombreApellido.test(nombre.value)) && apellido.value == "" ) {
                e.style.backgroundColor = "#FFB6C1";
                nombre.style.backgroundColor = "#FFB6C1";
                apellido.style.backgroundColor = "";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            } else if (!(expresiones.telefono.test(e.value)) && nombre.value == "" && !(expresiones.nombreApellido.test(apellido.value))) {
                e.style.backgroundColor = "#FFB6C1";
                nombre.style.backgroundColor = "";
                apellido.style.backgroundColor = "#FFB6C1";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            } else if (!(expresiones.telefono.test(e.value)) && !(expresiones.nombreApellido.test(nombre.value)) && !(expresiones.nombreApellido.test(apellido.value))) {
                e.style.backgroundColor = "#FFB6C1";
                nombre.style.backgroundColor = "#FFB6C1";
                apellido.style.backgroundColor = "#FFB6C1";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            }
        } else if (e.id == "formEmail") {
            if (!(expresiones.email.test(e.value)) && nombre.value == "" && apellido.value == "") {
                e.style.backgroundColor = "#FFB6C1";
                nombre.style.backgroundColor = "";
                apellido.style.backgroundColor = "";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            } else if (!(expresiones.email.test(e.value)) && !(expresiones.nombreApellido.test(nombre.value)) && apellido.value == "" ) {
                e.style.backgroundColor = "#FFB6C1";
                nombre.style.backgroundColor = "#FFB6C1";
                apellido.style.backgroundColor = "";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            } else if (!(expresiones.email.test(e.value)) && nombre.value == "" && !(expresiones.nombreApellido.test(apellido.value))) {
                e.style.backgroundColor = "#FFB6C1";
                nombre.style.backgroundColor = "";
                apellido.style.backgroundColor = "#FFB6C1";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            } else if (!(expresiones.email.test(e.value)) && !(expresiones.nombreApellido.test(nombre.value)) && !(expresiones.nombreApellido.test(apellido.value))) {
                e.style.backgroundColor = "#FFB6C1";
                nombre.style.backgroundColor = "#FFB6C1";
                apellido.style.backgroundColor = "#FFB6C1";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            }
        } else {
            if (e.value == "" && nombre.value == "" && apellido.value == "") {
                e.style.backgroundColor = "#FFB6C1";
                nombre.style.backgroundColor = "";
                apellido.style.backgroundColor = "";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            } else if (e.value == "" && !(expresiones.nombreApellido.test(nombre.value)) && apellido.value == "" ) {
                e.style.backgroundColor = "#FFB6C1";
                nombre.style.backgroundColor = "#FFB6C1";
                apellido.style.backgroundColor = "";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            } else if (e.value == "" && nombre.value == "" && !(expresiones.nombreApellido.test(apellido.value))) {
                e.style.backgroundColor = "#FFB6C1";
                nombre.style.backgroundColor = "";
                apellido.style.backgroundColor = "#FFB6C1";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            } else if (e.value == "" && !(expresiones.nombreApellido.test(nombre.value)) && !(expresiones.nombreApellido.test(apellido.value))) {
                e.style.backgroundColor = "#FFB6C1";
                nombre.style.backgroundColor = "#FFB6C1";
                apellido.style.backgroundColor = "#FFB6C1";
                document.getElementById("formEnvioError").style.display = "block";
                document.getElementById("formEnvioExito").style.display = "";
            }
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