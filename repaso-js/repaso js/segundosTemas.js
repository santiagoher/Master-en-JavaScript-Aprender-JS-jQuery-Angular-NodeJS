'use strict'
// Funciones
/*
    Son un grupo de ordenes agrupadas en un nombre completo
    - conjunto de reglas, funciones que se van a ejecutar
    - conjunto de acciones que se van ejecutando cuando son invocadas
    - se pueden reutilizar funciones cuantas veces quiera
*/

// defino la funcion
// function calculadora() {
//     // conjunto de instrucciones a ajecutar 
//     console.log('Hola soy la calculadora');
//     console.log('Si soy yo');

//     return "Hola soy la calculadora";
// }    

// // invocamos o llamamos la funcion
// var resultado = calculadora();
// console.log(resultado);

// // Parametros y parametros opcionales
// /**
//     - una funcion aparte de ejecutar funciones tambien 
//     - puede recibir parametros que son variables que van a alterar la logica o el resultado que nos va a devolver la funcion de esta manera abstraigo mucha de la logica y hago mucho mas reutilizable una funcion
//  */

// function calculadora2(numero1, numero2, mostrar = false) {

//     if (mostrar == false) {
//         console.log("Suma: " +(numero1 + numero2)+"<br>");
//         console.log("Resta: " +(numero1 - numero2)+"<br>");
//         console.log("Multiplicacion: " +(numero1 * numero2)+"<br>");
//         console.log("Division: " +(numero1 / numero2)+"<br>");
//         console.log("*********************************************");

//     } else {
//         document.write("Suma: " +(numero1 + numero2)+"<br>");
//         document.write("Resta: " +(numero1 - numero2)+"<br>");
//         document.write("Multiplicacion: " +(numero1 * numero2)+"<br>");
//         document.write("Division: " +(numero1 / numero2)+"<br>");
//         console.log("*********************************************");

//     }
    
// }

// calculadora2(2, 2, true);

// funciones dentro de otras
// function porConsola(numero1, numero2) {
//     console.log("Suma: " +(numero1 + numero2)+"<br>");
//     console.log("Resta: " +(numero1 - numero2)+"<br>");
//     console.log("Multiplicacion: " +(numero1 * numero2)+"<br>");
//     console.log("Division: " +(numero1 / numero2)+"<br>");
//     console.log("*********************************************");
// }

// function porPantalla(numero1, numero2) {
//     document.write("Suma: " +(numero1 + numero2)+"<br>");
//     document.write("Resta: " +(numero1 - numero2)+"<br>");
//     document.write("Multiplicacion: " +(numero1 * numero2)+"<br>");
//     document.write("Division: " +(numero1 / numero2)+"<br>");
//     console.log("*********************************************");

// }

// function calculadora2(numero1, numero2, mostrar = false) {
//     if (mostrar == false) {
//         porConsola(numero1, numero2);
//     } else {
//         porPantalla(numero1, numero2);
//     }

//     return true;
// }
// calculadora2(10, 2, true);

// parametros rest y spread

// function listaFrutas(fruta1, fruta2, ...resto_de_frutas) { // se guarda en un array 
//     console.log("Fruta 1: ", fruta1);
//     console.log("Fruta 2: ", fruta2);
//     console.log(resto_de_frutas);
// }
// var frutas = ["Naranja", "Manzana"]; // puedo tener una coleccion de elementos y se lo puedo pasar como parametro tipo spread
// listaFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco"); 


// funciones anonimas y callbakcs

/*
    - una funcion anonimas no es mas que una funcion que no tiene nombre, y la puedo almacenar en una variable 
    - funcion que no tiene nombre
    - un callback es una funcion que se ejecuta dentro de otra
*/

// let pelicula = function(nombreP) {
//     return "La pelicula es: " + nombreP;
// }

/* function sumame(numero1, numero2, sumaYmuestra, sumaPordos) {
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPordos(sumar);
    return sumar;
}

sumame(2, 5, dato => {console.log("La suma es: ", dato);},
dato => {console.log("La suma por dos es: ", dato);});

 */

// ambito de las varaibles
/* function holaMundo(texto) {
    var hola_mundo = "Texto dentro de funcion";


    console.log(texto);
    console.log(typeof numero.toString()); // un metodo es como una funcion pero aplicada a un objeto (convierte un dato en un script)
    console.log(hola_mundo);
}
var numero = 12;
var texto = "que paso mi crack";
holaMundo(texto);  */
/* holaMundo(hola_mundo); */ // nos va a dar un error porque la variable no esta definida en el ambito global del programa

// metodos para procesar textos 
// transformaciones de textos

/* var numero = 27;
var texto = 'Esto es un string';
var texto_secundario = 'ESTO ES UN MUY BUEN CURSO';

var numero_convertido_string = numero.toString(); // es una funcion que recibe como parametro la funcion (numero)
var texto_mayusculas = texto.toUpperCase();
var texto_minusculas = texto_secundario.toLowerCase();

/* console.log(typeof numero_convertido_string); 
console.log(texto_mayusculas);
console.log(texto_minusculas); */

// calcular la longitud de un texto

/* var nombre = '';
    nombre = ["Elemento1", "Elemento2"] // 2

console.log(nombre.length);


// concatenar - unir textos

var texto_total = texto + texto_secundario;
console.log(texto_total)
 */


// funciones de remplazo

/* var numero = 27;
var texto = 'Esto es un string Esto final santiago';
var texto_secundario = 'ESTO ES UN MUY BUEN CURSO UN';

var busqueda_1 = texto.indexOf("Esto"); // lo busca y nos muestra su ubicacion atraves del indice
var busqueda_2 = texto.lastIndexOf("Esto"); // muestra el ultimo indice
var busqueda_3 = texto.search("Esto"); // lo busca y nos muestra su ubicacion atraves del indice
var busqueda_4 = texto.match("Esto"); // lo devuelve en array y en el indice 0
var busqueda_5 = texto.match(/Esto/g); // expresion regular, hace una busqueda global 
var busqueda_6 = texto.substr(0, 4); // dependiendo del primer valor y ultimo nos da el string o el valor que queramos extraer de un texto
var busqueda_7 = texto.charAt(2); // dependiendo del primer valor y ultimo nos da el string o el valor que queramos extraer de un texto
var busqueda_8 = texto.startsWith("string"); // nos da true o false si lo encuentra al final 
var busqueda_9 = texto.endsWith("santiago") // nos da true o false si lo encuentra al inicio
var busqueda_10 = texto.includes("santiago"); // La función includes() recibe un argumento y devuelve un valor booleano indicando si el argumento se encuentra en el array o no. Por ejemplo:
var busqueda_11 = texto.replace("santiago", "pedroxd"); // remplaza el valor por el indicado 
var busqueda_12 = texto.slice(0, 10); // separa un string apartir del caracter que yo quiero 
var busqueda_12 = texto.split(); // lo agrega a un array
var busqueda_13 = texto.split(""); // los separa por espacios
var busqueda_14 = texto.trim(); // quita los espacios un caso para guardar contraseñas por delante y por detras

console.log(busqueda_1);
console.log(busqueda_2);
console.log(busqueda_4);
console.log(busqueda_5);
console.log(busqueda_6);
console.log(busqueda_7);
console.log(busqueda_8);
console.log(busqueda_9);
console.log(busqueda_10);
console.log(busqueda_11);
console.log(busqueda_12);
console.log(busqueda_13);
console.log(busqueda_14); 

 */

// platillas de texto javascript

var nombre = prompt("Ingresa tu nombre");
var apellido = prompt("Ingresa tu apellido");

/* var nombre_completo = "Mi nombre completo es: "+nombre+""+apellido; */

var texto = `
    <h1>hola como vamos </h1>
    <h3>mi nombre es: ${nombre}</h3>
    <h3>mi apellido es: ${apellido}</h3>
`
document.write(texto);



