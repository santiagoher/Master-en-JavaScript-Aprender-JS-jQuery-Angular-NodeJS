'use strict'

/*
    Tabla de multipllcar de un numero introducido en pantalla
*/

var numero = parseInt(prompt('Inserte un numero'));
for (let i = 1; i <= 10 ; i++) {
    document.write("<h1>"+i*numero+"</h1><br>");    
}

for (let c = 1; c <= 10 ; c++) {
    document.write("<h1>Tabla del "+c +"</h1>");
    for (let i = 1; i <= 10 ; i++) {
        document.write("<h1>"+i+"x"+c+"="+i*c+"</h1>");
    }
}




