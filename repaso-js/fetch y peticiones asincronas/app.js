// Feth (AJAX) y peticiones a servicios (APIS rest) asincronas
var div_usuarios = document.querySelector('#usuarios')
var div_janet = document.querySelector('#janet')
var div_profesor = document.querySelector('#profesor')

    getUsuarios()
    .then(data => data.json())
    .then(users => {
        listarUsuarios(users.data)
        return getInfo()
    })
    .then( data => {
        div_profesor.innerHTML = data
        return getJanet()
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data)
    })
    .catch(error => {
        console.log(error) // Se puede mandar un mensaje de error a la pagina o cualquier tipo de alerta que refleje el error que esta ocurriendo
    })

function getUsuarios() {
    return fetch('https://reqres.in/api/users?page=2') 
}
function getJanet() {
    return fetch('https://reqres.in/api/users/2')
}


function getInfo() {
    var profesor = {
        nombre: 'Santiago', 
        apellidos: 'Hernandez rangel',
        url: 'https://misitio.com'
    }

    console.log(typeof profesor)
    return new Promise((resolve, reject) => {
        var profesor_string = ""

        setTimeout(function() {
        profesor_string = JSON.stringify(profesor)
        if (typeof profesor_string != 'string' || profesor_string == '') return reject('Error'  )

            return resolve(profesor_string)
        }, 3000)
    })
}

function listarUsuarios(usuarios) {
    usuarios.map((user, i) => { // le pasamos el usuario, y el indice del usuario
        let nombre = document.createElement('h2')
        nombre.innerHTML = i + " " + user.first_name + " " + user.last_name 
        div_usuarios.appendChild(nombre)
        document.querySelector('#loading').style.display = "none"
    })
}

function mostrarJanet(user) {
    let nombre = document.createElement('h4')
    let avatar = document.createElement('img')
    avatar.src = user.avatar
    nombre.innerHTML = user.first_name + " " + user.last_name
    div_janet.appendChild(nombre)
    div_janet.appendChild(avatar)
    document.querySelector('#janet .loading').style.display = "none"
}

