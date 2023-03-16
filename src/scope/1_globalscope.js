// variables:

var a; // declaracion
var b= 'b' // declaracion con asignacion
b='bb' // reasignacion
var a = 'aa' // redeclaracion con asignacion

// global scope
var fruit = 'apple'; // global

bestFruit();

function bestFruit (){
    console.log(fruit);
}

// otra forma de constuir variable global es creando una asingacion de una variable sin declarar

function contrie(){
    country = 'colombia'; //////// asignacion de valor a una variable no declarada.
    console.log(country);
}

contrie();////////////////// ejecutar la funcion imprime el console.log de la linea 21
console.log(country);///////////// llamar a la variable country fuera de funcion: es posible porque es global.
 