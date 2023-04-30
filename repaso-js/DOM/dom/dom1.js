'use strict'

function cambiaCOlor(color) {
    caja.style.background = color;
}

// conseguir elementos con un ID en concreto
var caja = document.getElementById("micaja");
let caja_2 = document.querySelector("#micaja");

caja.style.background = 'red';
caja.innerHTML = "PARRAFO MODIFICADO"
caja.style.color = "white";
caja.style.padding = "7px"
caja.style.textAlign = "center"
caja.style.fontWeight = "700";
caja.className = "clase1 clase2"

console.log(caja);

// conseguir elementos por su etiqueta

var todos_losdiv = document.getElementsByTagName("div"); 
// todos_losdiv[2].style.background = "red"
// todos_losdiv[2].className = "miseccion";

// var div2 = todos_losdiv[2].innerHTML = "texto cambiado"

// todosLosDivs.forEach((valor, indice) => {

var valor;
    for(valor in todos_losdiv) {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todos_losdiv[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector("#miseccion").appendChild(parrafo)
    }
    
// });

// console.log(div2);
// console.log(todos_losdiv); 

// conseguir elementos por su clase css