let imagenGrande = false;
let navPegado = true;

function cambiarTamano() {

    let imagen = document.getElementById("diagrama");

    if (imagenGrande) {

        imagen.style.height = "50%";
        imagen.style.width = "50%";
        imagenGrande = false;

    } else {

        imagen.style.height = "100%";
        imagen.style.width = "100%";
        imagenGrande = true;

    }
}

function pegar() {
    let botonNav = document.querySelector("#botonPegado > p");
    let nav = document.querySelector("nav");
    if (navPegado) {
        botonNav.textContent = "Pegar";
        navPegado = false;
        nav.style.position = "static";
        
    } else {
        botonNav.textContent = "Despegar";
        navPegado = true;
        nav.style.position = "sticky";
    }
}
