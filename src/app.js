// mostrar y ocultar

const hideSection = (id) => {
  document.getElementById(id).style.display = "none";
}

const showSection = (id) => {
  document.getElementById(id).style.display = "block";

}
// inicio 



// seccion VENGADORES 
let preguntasVengadores = document.getElementById("preguntas-vengadores");

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


// array que guarda las preguntas con respiestas 
var preguntas = [																		
  ['1-¿Quién saco al hombre hormiga del mundo cuántico?', 'Una rata'],
  ['2-¿De dónde es Thor?', 'Asgard'],
  ['3-¿Qué gema contiene el ojo de Agamotto?', 'La gema del tiempo']					
],
pregunta, respuesta,
formuladas = 0,
acertadas = 0;
hazPregunta();

document.getElementById('boton-vengadores').addEventListener('click', function(){
var entrada = document.getElementById("datos").value;
if(entrada == respuesta){
  acertadas++;
}
if(formuladas < 3){			
  hazPregunta();		
}
else{						
  muestraResultado();		
}
});

function hazPregunta(){
var e;		
e = preguntas.splice( numAleat(0, preguntas.length-1), 1 );
pregunta = e[0][0];			 
respuesta = e[0][1];
document.getElementById('pregunta-vengadores1').innerHTML = pregunta;        
document.getElementById('datos').value = '';              
formuladas++;
}

function muestraResultado(){
      var resultado;     
switch(acertadas){
  case 0:
    resultado = 'No eres un buen fan, pero sigue intentando';
    break;
  case 1:
    resultado = 'Bueno, al menos lo intentaste';
    break;
  case 2:
    resultado = '¡Eres el mejor fan del mundo!';
  
}
      document.getElementById('resolucion').innerHTML = resultado;
}
/*
Devuelve un número aleatorio entero entre 'min' y 'max' (ambos inclusive)
*/
function numAleat(min, max){
return Math.floor( Math.random() * (max - min + 1) ) + min;
}

