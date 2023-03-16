function saludo (){
    let userName= 'ana';
    console.log(userName);
    if (userName === 'ana'){
        console.log(`hola ${userName}, como estas?`);///// "handle bar":`` <= para referir la variable por interpolacion

    }
}

saludo();
console.log(`${userName}`);//////// no puedo acceder al user name por fuera de la funcion saludo()
