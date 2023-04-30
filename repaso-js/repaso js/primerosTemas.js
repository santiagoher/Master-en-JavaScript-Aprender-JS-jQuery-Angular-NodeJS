//modo estricto
/*
    uso para la buena practica, se adecua mas a los ultimos estandares de js 
*/ 

'use strict'
// variables
/*
    es un contenedor de informacio, al crear una variable tiene que ser muy descriptiva al momento de definir una variable 
*/

var pais = 'Colombia XD';
var antiguedad = 2012;
var pais_y_continente = pais + antiguedad
console.log(pais_y_continente);

pais = 'Mexico';
antiguedad = 2000;
console.log(pais, antiguedad);

// let y var 
/*
    LET

    permite definir variables limitanto su alcanze al bloque de aclaracion o exprecion donde se esta usando  

    VAR

    define una variable global local en una funcion sin importar el ambito del bloque 
*/ 

// prueba con var 

var numero = 40;
console.log(numero);

if (true) {
    var numero = 50;
    console.log(50)
}
console.log(numero);

// prueba con let 

let texto = 'curso js';
console.log(texto);

if (true) {
    let texto = 'curso html';
    console.log(texto)
}

console.log(texto); 

// const (contantes)

/*
    al igual que var es un contenedor, la diferencia es que no se va a poder cambiar, variar 
*/


// var web = 'url';
// const ip = 'ip.numeros';

// web = 'url cambiada';
// ip = 'ip.diferente';

// console.log(web);
// console.log(ip);

// operadores 

var numero1 = 5;
var numero2 = 10;

var operacion1 = numero1 + numero2;
var operacion2 = numero1 - numero2;
var operacion3 = numero1 * numero2;
var operacion4 = numero1 / numero2;
var operacion5 = numero1 % numero2;

console.log(operacion1);
console.log(operacion2);
console.log(operacion3);
console.log(operacion4);
console.log(operacion5);


// tipos de datos 
var numero_entero = 44;
var cadena_texto = 'esto es una cadena de texto pa';
var cadena_texto_pro = "esto es una cadena de texto pa";
var verdadero_0_falso = true; // puede ser un 0 o un 1
var verdadero_0_falso = false;

var numero_falso = '33.3';
Number(numero_falso);

console.log(String(numero_falso)+7);

// detectar un tipo de dato tipeOf

console.log(typeof numero_entero)       ;


// condicionales 
let edad = 14;
let nombre = 'santiago';

if(edad >= 18) {
    // es mayor de edad 
    console.log(nombre+" tiene "+ edad +" años, es mayor de edad");

    if (edad <= 33) {
        console.log('Todavia eres milenial');
    } else if (edad >= 70) {
        console.log("Eres un anciano"); 
    } else {
        console.log("Ya no eres milenial");
    }
} else {
    // es mejor de edad
    console.log(nombre + " tiene " + edad + " años, es MENOR de edad");
}

// operadores logicos
let year = 2001;

// negacion !=
if ( year != 2023 ) {
    console.log("El año es incorrecto el año es + " + year );
}

// and y &&

if ( year <= 2000 && year <= 2020 && year != 2000 ) {
    console.log('estamos en la era actual')
} else {
    console.log('estamos en la era post moderna')
}  

// or //o ||

if ( year == 1999 || year == 2001 && year == 2021) {
    console.log('los años son iguales');
} else {
    console.log('los años son diferentes');
}

// condicional switch

var numero = 10;
var texto_2 = '';

switch (numero == 10) {
    case numero == 10:
        texto_2 = 'El numero es igual a 10'
        break;

    default:
        texto_2 = 'NaN'
        break;
}

console.log(texto_2);

// buble for  
/*
    El primer elemento del bucle for es un contador que suele llamarse i
    EL segundo es la condicion en que caso va hacer iteracion el bucle
    EL tercero es el incrementador del incrementador ++
*/ 
var numero = 100;

for(var i = 1; i < numero; i++) {
    console.log('Vamos por el numero ' + i);

    //debugger; // podemos ver que hace dentro del bucle 
}

// bucle while
// como parar un bucle con

/*
    Es parecido al bucle for, es menos estricto que el for, yo puedo hacer bubles infinitos y es indefinidos
    - va a constar de una condicion 
    -cuando se cumpla esa condicion se va ejecutar un bloque de instrucciones infinitamente
    - cuando no cumple la condicion se sale bucle 

    */

var año = 2050;

while (año != 2000) {
    // ejecuta eso 
    console.log('Estamos en el año '+año)

    if( año == 2023) {
        break;
    }  

    año--;
}


// bucle do while

/*
    primero ejecutamos un bloque de codigo y luego comprobamos una condicion para hacer denuevo ese bloque de codigo o simplemete ejecutarlo una sola vez
*/ 

// var años = 29;

// do {
//     alert("SOLO CUANDO SEA DIFERENTE A 20");
//     años--;
// // las condiciones que va a evaluar
// } while( años  > 25);
 
// alertas 
//alert('este es mi mensaje!!');
//alert('mi texto!!');

// alertas de confirmacion
//var r = confirm("Estas seguro de querer continuar?")
//console.log(r)

//ventana de ingreso de informacion
var edadd = prompt('¿que edad tienes?', 18);
console.log(edadd);
// ventanas confirmacion


