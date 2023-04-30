var fecha = new Date()
var year = fecha.getFullYear()
var mes = fecha.getMonth()
var dia = fecha.getDate()
var hora = fecha.getHours()

var fechaMod = `
    La fecha es: ${fecha}
    El año es: ${year}
    El mes es: ${mes}
    El dias es: ${dia}
    La hora es: ${hora}
`

document.write(fechaMod)