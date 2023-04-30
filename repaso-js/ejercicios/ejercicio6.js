/*
    Que nos diga sin un numero es par o impar, y si no es un numero que vuelva a pedir el numero
*/


// creamos la variable
var numero = parseInt(prompt('Inserte el numero'));

while (isNaN(numero)) {
    numero = parseInt(prompt('Inserte el numero'));

}

if ( numero%2 == 0 ) {
    document.write('El numero es PAR!!');
} else {
    document.write('El numero es IMPAR!!');
} 
