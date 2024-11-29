// Modo oscuro 

let toggleMode = document.getElementById("toggle-mode");
let themeIcon = document.getElementById("theme-icon");

function darkMode() {

    //alternar la clase del body
    document.body.classList.toggle("dark-mode");

    // Cambiar ícono según el modo
    if (document.body.classList.contains("dark-mode")) {
        themeIcon.classList.replace("fa-moon", "fa-sun"); // Ícono de modo oscuro
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon"); // Ícono de modo claro
    }
}

// Dar la accion a la funccion con un evento 
toggleMode.addEventListener("click", darkMode);



// Menu hamburguesa

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
} )

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})