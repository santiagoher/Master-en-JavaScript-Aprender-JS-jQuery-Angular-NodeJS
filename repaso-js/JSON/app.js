/*
    JSON

    Con el punto podemos acceder a la informacion del json
*/


var movieArray = [
    {name: 'La verdad duele', year:2000, city:'Francia'},
    {name: 'Batman vs Superman', year: 2017, city: 'Estados Unidos'}
]
var caja_peliculas = document.querySelector('#peliculas')
var i
for (i in movieArray) {
    var p = document.createElement('p')
    var arraySpace = Object.values(movieArray[i]).join(', ')
    p.append(arraySpace)
    caja_peliculas.append(p)
}

// var movieArray = [    
//     {name: 'La verdad duele', year:2000, city:'Francia'},
//     {name: 'Batman vs Superman', year: 2017, city: 'Estados Unidos'}
// ]
// var caja_peliculas = document.querySelector('#peliculas')
// var i
// for (i in movieArray) {
//     var p = document.createElement('p')
//     var movieSpace = Object.values(movieArray[i]).join(', ')
//     p.append(movieSpace)
//     caja_peliculas.append(p)
// }



