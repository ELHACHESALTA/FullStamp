var botonClaro = document.getElementById("modoClaro");

botonClaro.addEventListener("click", () => {
    // Guarda el modo en localStorage.
    if(document.getElementById("principal").classList.contains("dark")) {
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
    }
});

var botonOscuro = document.getElementById("modoOscuro");

botonOscuro.addEventListener("click", () => {
    // Guarda el modo en localStorage.
    if(document.getElementById("principal").classList.contains("dark")) {
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
    }
});