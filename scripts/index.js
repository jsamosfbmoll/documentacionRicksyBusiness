let imagenGrande = false;

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

