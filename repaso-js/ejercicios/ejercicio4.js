/*
    Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
 */

let numero1 = parseInt(prompt('Inserte un numero'));
let numero2 = parseInt(prompt('Inserte un numero'));

while (numero1 < numero2) {
    numero1++

    if (numero1%2 != 0) {
        document.write("<h1>"+numero1+"</h1> <br>");

    }
}



