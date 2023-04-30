// crea un nuevo conjunto
const letras = new Set(["gato", "perro", "loro"]);

// segunda forma de crearlo agregandolo uno por uno
const letrasforma2 = new Set();
letrasforma2.add("a");
letrasforma2.add("b");
letrasforma2.add("c");

// elimina elemento
letrasforma2.delete("a");

// miramos si existe
console.log(letrasforma2.has("b"));

// size cantida de elementos
console.log(letrasforma2.size);

// iterar el con foreach
// let str = ""
// letrasforma2.forEach((letra) => {
//     str += letras + ","
// })
// console.log(str)

// itera el conjunto con for  .. of
console.log(letrasforma2.values());
let str = "";
for (let letra of letrasforma2) {
  str += letra + ",";
}
console.log(str);
