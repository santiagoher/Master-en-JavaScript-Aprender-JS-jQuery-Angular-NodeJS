'use strict'
/*
    Hacer un programa que muestre todos los numeros entre 2 numeros introducidos por el usuario
 */


// pedimos los datos y los almacenamos en una variable para despues poderlos utilizar
var numero1 = parseInt(prompt('Inserte un numero'));
var numero2 = parseInt(prompt('Inserte un numero'));


// creamos un ciclo for iniciamos el for con un contador, la segunda es la condicion que se debe complir para el for se ejecute, y por ultimo creamos el incrementador que va a ir sumando todos los numeros en el rango de numeros que esta indicado
for ( var i = numero1; i <= numero2; i++ ) {
    document.write("<h1>"+i+"</h1> <br>");
}