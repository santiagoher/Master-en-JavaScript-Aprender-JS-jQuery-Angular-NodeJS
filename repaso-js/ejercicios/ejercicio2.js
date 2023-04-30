// ejerciciO 2 
/*
    
*/ 

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt('Inserte numero, hasta que sea negativo se detiene el programa'));

    if (isNaN(numero)) {
        suma = 0
    } else if (numero >= 0) {
        suma = suma + numero
            
        contador++;
    }

    console.log(suma)
    console.log(contador);

} while ( numero >= 0);

// mostramos el resultado en  pantalla 
alert('La suma de los numeros es: '+ suma);
alert('La media de todos los numeros es: '+(suma /contador));