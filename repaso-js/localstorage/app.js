/*
    Local Storage

    Es una forma de guardar informacion en el navegador y que persista en la pagina es como una memoria que permanece mientras y este disponible mientras yo navego en mi pagina web 
*/

// comprobar disponibilidad de local storage 
if (typeof Storage !== 'undefined') {
    console.log('LocalStorage disponible')
} else {
    console.log('LocalStorage no disponible')
}

// guardar datos
localStorage.setItem('titulo', 'curso de master en js')

// recuperamos datos y lo mostramos en pantalla 
document.write(localStorage.getItem('titulo'))

var usuario = {
    nombre: 'santiago hernandez rangel',
    correo: 'santihernandez2005r@gmail.com',
    edad: 18,
    web: 'www.owdrys.com'
}

localStorage.setItem('usuario', JSON.stringify(usuario))

// recuperamos datos y lo mostramos en pantalla 
var users = JSON.parse(localStorage.getItem('usuario')) 

// FORMA 1 DE AGREGAR LOS DATOS
// var nombre = usuario.nombre
// var correo = usuario.correo
// var edad = usuario.edad
// var web = usuario.web

// document.write(nombre, correo, edad, web)

// FORMA 2 DE AGREGAR LOS DATOS
document.querySelector('#datos').append(users.nombre , ' ', users.correo)

// eliminar elementos de localstorage
localStorage.removeItem("titulo");

// vaciar completamente el localstorage
localStorage.clear()
