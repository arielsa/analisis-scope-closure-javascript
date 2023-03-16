function saludar (){
    let userName = 'oscar';
    
    function displaySaludo(){

        console.log(`hola ${userName}`); ///////// accedemos al userName por fuera de la funcion

    }
    return displaySaludo();///////////// importante retornar la funcion
}

saludar(); /////////// ejecuto la funcion e imprime por consola el saludo
const s = saludar(); /////////////guardo en variable la funcion saludar
console.log(s);/////////// nos imprime el nombre de la variable
console.log(s());///////// nos imprime la EJECUCION de la variable, es decir el saludo



///////////////monedero////////////////////////

////monedero sin closure:
function monedero1 (moneda){

    let acumulado=0;

    acumulado += moneda;

    console.log(`acumulado: ${acumulado}`);
}

monedero1(5);
monedero1(5);//////////////ejecuto 2 veces la funcion y NO SUMA. NO ACUMULA
////// la logica que estamos utilizando no memoriza el valor del acumulador

let miAhorro1 = monedero1;/////////// guardo en una const la funcion y de todas formas no acumula
miAhorro1(5);
miAhorro1(5); 

//////////monedero con closure:

function monedero2 () {

    let acumulador=0;

    function sumar (monedas){

        acumulador += monedas;

        console.log(`se acumulo ${acumulador}`);

    }

    return sumar;
}

const miAhorro2 = monedero2 (1);

miAhorro2 (5);
miAhorro2 (5);////////////// aca si acumula por cada iteracion


///////////////////////////////////////////////

////////////sin closure
function alcancia(monedas){
    let contenido = 0
    contenido = contenido + monedas
    console.log(contenido);
    return contenido
}

const miAlcancia = alcancia

miAlcancia(5) // 5
miAlcancia(4) // 4

///////////////con closure

function alcancia(cantidadInicial){
    let contenido = cantidadInicial
    return function guardar(monedas){
      contenido = contenido + monedas
      console.log(contenido);
      return contenido
    }
  }
  
  const miAlcancia = alcancia(2)
  miAlcancia(5) // 7
  miAlcancia(4) // 11
  
  const otraAlcancia = alcancia(5)//////////////// tambien se puede instanciar
  otraAlcancia(30) // 35
  otraAlcancia(20) 

///////////////////////
// q clase de brujeria es esta? al tener q recordar la variable creada en el ambito lexico anetrior
//se la puede utilizar como acumulador. 

//// aca se puede ver un caso practico de lo que implica 
//1) hacer una closure
//2)acceder a una variable anterior, por el ambito lexico
//3) y con esto hacer una adicion para generar un acumulador






