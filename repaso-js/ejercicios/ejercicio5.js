'use strict'

/*
    Muestre todos los numeros divisores de un numero 
 */

let numero = parseInt(prompt('Inserte un numero'));

for (let i = 0; i <= numero; i++) {
    
    if ( numero % i == 0  ) {
        console.log('Divisor: '+ i) 
    }
}