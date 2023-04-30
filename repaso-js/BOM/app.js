'use strict'

// window.addEventListener('load', function() {

//     // Timers
  
//     var tiempo = setTimeout(function() {
        
//         var h1 = document.querySelector('.titulo')
//         if (h1.style.background == 'red') {
//                 h1.style.background = 'green'
//         } else {
//                 h1.style.background = 'red'   
//         }
//     }, 500)
// }) 


// var tiempo = setInterval(function () {

//     var titulo2 = document.querySelector('.titul2')
     
//     if (titulo2.style.background == 'blue') {
//             titulo2.style.background = 'yellow'
//     } else {
//             titulo2.style.background = 'blue'
//     }
// }, 500)

// var stop = document.getElementById("stop")

// stop.addEventListener("click", function() {
//     clearInterval(tiempo)
// })

// var start = document.querySelector("#start")

// start.addEventListener("click", function() {
//     setInterval(tiempo)
// })
// console

var boton1 = document.getElementById("btn1")
var boton2 = document.getElementById("btn2")

var contador = 0
boton1.addEventListener('click', function() {
    incrementarnumero()
})

boton2.addEventListener('click', function() {
    decrementonumero()
    
})

function incrementarnumero() {
    contadorV.textContent = ++contador
}

function decrementonumero() {
    contadorV.textContent = --contador

}

// function incrementarnumero() {
//     contadorV.textContent = ++contador
// }
// function decrementonumero() {
//     contadorV.textContent = --contador
    
// }


