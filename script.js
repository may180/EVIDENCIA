$(document).ready(function () {/*Cuando el documento esta listo carga la funcion*/
    $(window).scroll(function () { /*Cuando hacemos scroll carga la funcion*/
        if ($(this).scrollTop() > 0) {
            $('header').addClass('header2');
        } else {
            $('header').removeClass('header2');
        }
    });
});

function abrir() {
    var container1 = document.getElementById('seccion1');
    var container2 = document.getElementById('seccion2');

    if (container1 && container2) {
        container1.style.display = "none";
        container2.style.display = "block";
    }
}
function cerrar() {
    var container1 = document.getElementById('seccion1');
    var container2 = document.getElementById('seccion2');

    if (container1 && container2) {
        container1.style.display = "block";
        container2.style.display = "none";
    }
}

let idiomaActual = 'es';

function cambiarIdioma() {
    idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
    document.getElementById('htmlIdioma').lang = idiomaActual;
    actualizarContenido();
}

function actualizarContenido() {
    const elementos = document.querySelectorAll('[data-traduccion]');

    elementos.forEach(elemento => {
        const traduccionKey = elemento.dataset.traduccion;
        elemento.textContent = traducciones[traduccionKey][idiomaActual];
    });
}

