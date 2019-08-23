// mostrar y ocultar

const hideSection = (id) => {
    document.getElementById(id).style.display = "none";
}

const showSection = (id) => {
    document.getElementById(id).style.display = "block";

}



// seccion VENGADORES 
const preguntasVengadores = document.getElementById("preguntas-vengadores");

preguntasVengadores.addEventListener("click", vengadores);

function vengadores() {
    hideSection("elige");
    showSection("vengadores");
}

//  seccion LIGA

const preguntasLiga = document.getElementById("preguntas-liga");

preguntasLiga.addEventListener("click", liga);

function liga() {
    hideSection("elige");
    showSection("liga");
}

// funcion  imprimir nombre
let nombre = "";
let nombre1 = document.getElementById("nombre-usuario1");

// respuestas
const formVendores = document.getElementById("trivia-vengadores");
let formulario = document.forms.namedItem("trivia");
console.log(formulario.formVendores.value)