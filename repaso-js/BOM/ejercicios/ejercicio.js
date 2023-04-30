let formulario = document.querySelector('#formulario')
let box_dashed = document.querySelector('.date-form')
box_dashed.style.display="none"

formulario.addEventListener('submit', function() {
    console.log('Evento submit capturado')

    // getElementById() es mejor usarlo para temas de 
    let nombre = document.querySelector('#nombre').value // sacamos los valores de los campos
    let apellido = document.querySelector('#apellido').value
    let edad = parseInt(document.querySelector('#edad').value)

    if (nombre.trim() == null || nombre.trim().length == 0) {
        document.querySelector('#error').innerHTML = 'El nombre no es valido'
        return false
    }  else {
        document.querySelector('#error').style.display = 'none'
        
    }
    if (apellido.trim() == null || apellido.trim().length == 0) {
        alert('El apellido no es valido')
        return false
    }  
    if (edad == null || edad <= 0 || isNaN(edad)) {
        alert('La edad no es valido')
        return false
    }  

    box_dashed.style.display="block"

    let p_nombre = document.querySelector('#p_nombre span')
    let p_apellido = document.querySelector('#p_apellido span')
    let p_edad = document.querySelector('#p_edad span')

    p_nombre.innerHTML = nombre
    p_apellido.innerHTML = apellido
    p_edad.innerHTML = edad

})

console.log(error)
