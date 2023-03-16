const myGlobal = 0;

function myFunction(){
    const myNumber=1;
    console.log(myGlobal); 

    function father(){
        const inner = 2;
        console.log(myGlobal,myNumber);

        function child (){
            console.log(myGlobal,myNumber,inner); 

        }
        return child ();
    }
    return father();
}

myFunction();

// una funcion anidada puede acceder a las variables por fuera de su ambito lexico.
// en el ambito lexico de la o las funciones que la anidan.
// esto es un closure.
//por esto la funcion child() puede acceder a las variables de los bloques anteriores.



