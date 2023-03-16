function fruit (){

    if(true){
        var fruit1='apple';
        let fruit2= 'kiwi';
        const fruit = 'banana';
    }

    console.log(fruit1);/////////// local scope. puedo acceder dentro de toda la funcion, en cualquier bloque.
    console.log(fruit2);//////////block scope. solo accedo a la variable dentro de su bloke principal
    console.log(fruit3);//////////block scope. solo accedo a la variable dentro de su bloke principal
}

console.log(fruit1);////////////// var es accedible dentro de toda la funcion pero no por fuera