// mostrar y ocultar

const hideSection = (id) => {
  document.getElementById(id).style.display ="none";
}

const showSection = (id) => {
    document.getElementById(id).style.display ="block";

}
// inicio 

 

// seccion VENGADORES 
const preguntasVengadores = document.getElementById("preguntas-vengadores");

preguntasVengadores.addEventListener("click",vengadores);

function vengadores(){
  hideSection("elige");
  showSection("vengadores");
}
 
//  seccion LIGA

const preguntasLiga = document.getElementById("preguntas-liga");

preguntasLiga.addEventListener("click",liga);

function liga(){
  hideSection("elige");
  showSection("liga");
}
 
 