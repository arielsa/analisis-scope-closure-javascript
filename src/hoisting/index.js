console.log(nombre) // undefined
var nombre = "Andres" 

// Hoisting
var nombre = undefined
console.log(nombre)
nombre = "Andres"

///////////////////

if (true){
    var saludo = "hola"
    let despedida = "chao"
  }
  
  console.log(saludo)
  console.log(despedida)

  var saludo = undefined

  /////////////////

if (true){
  saludo = "hola"
  let despedida = "chao"
}

console.log(saludo) 
// "hola"
console.log(despedida) 
// ReferenceError: despedida is not defined