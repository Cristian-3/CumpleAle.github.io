var fecha = new Date()
var fechaCompleta = fecha.getTime()
var fechaAñoNacimiento = new Date("2007,1,28,00:00");
var fechaEdadA = document.getElementById("fecha")
var edad = parseInt((fechaCompleta - fechaAñoNacimiento) / (1000 * 60 * 60 *24 * 365));
document.getElementById("fecha").innerHTML = "<strong>" + edad + "</strong>"
var seccion1 = document.getElementById("seccion1")
var seccion2 = document.getElementById("seccion2")
var seccion3 = document.getElementById("seccion3")
var boton1 = document.getElementById("boton1")
boton1.addEventListener("click", boton1E)
var boton2 = document.getElementById("boton2")
boton2.addEventListener("click", boton2E)
var boton3 = document.getElementById("boton3")
boton3.addEventListener("click", boton3E)
var botonRegresar = document.getElementById("botonRegresar")
botonRegresar.addEventListener("click", goBack)
var titulo = document.getElementById("titulo")

seccion1.style.display = 'none'
seccion2.style.display = 'none'
seccion3.style.display = 'none'
boton1.style.display = ''
boton2.style.display = ''
boton3.style.display = ''
titulo.style.display = ''

function boton1E(event) {
    event.preventDefault();
    var fechaActual = new Date();
    var fechaInicio = new Date(fechaActual.getFullYear(), 0, 28);
    var diaContador = 0;

    if (fechaActual >= fechaInicio) {
        diaContador = Math.floor((fechaActual - fechaInicio) / (1000 * 60 * 60 * 24));
    } else {
        fechaInicio.setFullYear(fechaInicio.getFullYear() - 1);
        diaContador = Math.floor((fechaActual - fechaInicio) / (1000 * 60 * 60 * 24));
    }

    setInterval(function() {
        fechaActual = new Date();
        var reloj = document.getElementById("reloj");
        dia.innerHTML = "<strong>" + diaContador + " dias </strong>";
        reloj.innerHTML = "<strong>" + fechaActual.toLocaleTimeString("en-US", { hour12: false }) + " HORAS</strong>";
    }, 1000);
      
    console.log()
    seccion1.style.display = ''
    boton1.style.display = 'none'
    boton2.style.display = 'none'
    boton3.style.display = 'none'
    titulo.style.display = 'none'
}

function boton2E(event) {
    event.preventDefault();
    seccion2.style.display = ''
    boton1.style.display = 'none'
    boton2.style.display = 'none'
    boton3.style.display = 'none'
    titulo.style.display = 'none'
}

function boton3E(event) {
    event.preventDefault();

    seccion3.style.display = ''
    boton1.style.display = 'none'
    boton2.style.display = 'none'
    boton3.style.display = 'none'
    titulo.style.display = 'none'
}

function goBack() {
    window.history.back();
}
