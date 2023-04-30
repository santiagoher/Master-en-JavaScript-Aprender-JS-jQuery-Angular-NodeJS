'use strict'

// arrays y arreglos, matrices

// var name = 'santiago';
// var names = ["santiago", "pedro", "juan", 200, true];  // coleccion de tipos de  datos agrupados

// // cada uno de los elementos tiene un indice (empiezan desde 0)
// var lenguajes =  new Array("JS", "GO", "JAVA", "PHP");
/* console.log(names[0]); // accedemos por los indices
console.log(names.length); // nos da la longitud del array (elementos)
console.log(lenguajes); */
/* 
var elemento = parseInt(prompt('Que elemento del array quieres?', 0));
if (elemento >= names.length) {
    document.write('Introduce un numero menor o igual 4');
} else {
    document.write("El usuario seleccionado es:"+names[elemento]);
} */

// document.write("<h1>Lenguajes de programación del 2018 </h1>");
// document.write("<ul>")

// for (var i = 0; i < lenguajes.length; i++) {
//     document.write("<li>"+lenguajes[i]  +"</li>") 
// } 
// document.write("</ul>")

// lenguajes.forEach((elemento, indice, array)=> { // itera todo el array y no lo muestra recibe tres valores el elemento, indice, array 
//     console.log(array);
//     document.write("<li>"+indice+" "+elemento+"</li>") 
// })

// arrays multidimensionales (uno dentro de otro)
// podemos acceder a los indices como quiera
// let categorias = ['Accion', 'Terror', 'Comedia'];
// let peliculas =  ['La verdad duele', 'Gran torino'];
// var cine = [categorias, peliculas];

// console.log(cine[0][2]);
// console.log(cine[1][0]);

// operaciones con arrays


// var categorias = ['Accion', 'Terror', 'Comedia'];
// var peliculas =  ['La verdad duele', 'Gran torino'];
// var elemento = prompt('Introduce tu pelicula')


// var cine = [categorias, peliculas];



// // while ( elemento != "ACABAR") {
// //     var elemento = prompt('Introduce tu pelicula')
// //     peliculas.push(elemento);
// // }
// // peliculas.pop(); // nos elimina el ultimo valor
// // console.log(peliculas);

// var indice = peliculas.indexOf('Comedia');

// if ( indice > -1) {
//     peliculas.splice(indice, 1);
// }
// document.write(peliculas) 

// console.log(peliculas);

// let peliculas_a_string = peliculas.join(); // convierte un array en un string, separados por comas
// console.log(peliculas_a_string); // pelicula1 pelicula2 pelicula3

// convertir un string a un array

// ordenar arrays
// var cadena__array = cadena.split(", ");
// document.write(cadena__array);
// console.log( cadena__array)
// cadena.sort() // ordena los elementos
// cadena.reverse() // ordena los elementos forma invertida

// recoger arreglos for in
// var cadena = "texto1, texto2, texto2";

// for (let cadena in cadenas) {
//     document.write(cadena)
// }

// buscar un array
var lenguaje = ["PHP7", "HTML", "CSS"]
var precios = [12, 23, 12, 3, 40];
// var busqueda = lenguaje.find(lenguaje => lenguaje == "PHP7");
var busqueda2 = precios.some(precios => precios > 50);

// console.log(busqueda)
console.log(busqueda2)