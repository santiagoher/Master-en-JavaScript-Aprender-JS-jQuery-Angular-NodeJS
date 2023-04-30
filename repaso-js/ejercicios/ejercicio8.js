/*
    Calculadora
    - pida dos numeros en pantalla
    - si metemos uno mal que lo vuelva a pedir
    - en el cuerpo de la pagina, en una alerta y por la consola el resultado de 
    sumar, restar, multiplicar, dividir.

*/

var numero1 = parseInt(prompt('Inserte el numero uno'));
var numero2 = parseInt(prompt('Inserte el numero dos'));

while (isNaN(numero1) || isNaN(numero2)) {    
    var numero1 = parseInt(prompt('Inserte el numero uno'));
    var numero2 = parseInt(prompt('Inserte el numero dos'));
}
document.write("<h1> La suma es: "+(numero1+numero2)+"</h1> <br>");
document.write("<h1> La resta es: "+(numero1-numero2)+"</h1> <br>");
document.write("<h1> La multiplicacion es: "+(numero1*numero2)+"</h1> <br>");
document.write("<h1> La division es: "+(numero1/numero2)+"</h1> <br>");

alert('La suma es: '+(numero1+numero2));
alert('La resta es: '+(numero1-numero2));
alert('La multiplicacion es: '+(numero1*numero2));
alert('La division es: '+(numero1/numero2));

console.log('La suma es: '+(numero1+numero2));
console.log('La resta es: '+(numero1-numero2));
console.log('La multiplicacion es: '+(numero1*numero2));
console.log('La division es: '+(numero1/numero2));  