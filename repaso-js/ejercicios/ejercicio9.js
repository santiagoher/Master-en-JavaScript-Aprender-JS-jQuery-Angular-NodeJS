"use strict";

/*
    1. Pida 6 numeros en pantalla y los meta a un array
    2. Mostrar el array enteros, todos sus elementos en el cuerpo de la pagina y en la consola
    3. Ordenarlo y mostrarlo
    4. invertir su orden y mostrarlo
    5. mostrar cuantos elementos tiene el array
    6. busqueda de un valor introducido por el usuario, y que nos diga si esta y nos diga si lo ecuentra y su indice
*/

var numero = new Array();
for (let i = 0; i <= 5; i++) {
  numero[i] = parseInt(prompt("Inserte un numero"));
}
console.log(numero);
numero.sort();
numero.reverse(function (a, b) {
  return a - b;
});
console.log(numero);
console.log(numero.length);

if (condition) {
} else {
}
