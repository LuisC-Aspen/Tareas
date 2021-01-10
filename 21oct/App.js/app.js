let obj = {
    nombre: 'Carlos',
    edad: 44,
    apellidos: "Ulibarri",
    keypress: () => {
        console.log('Se ha presionado una tecla');
    },
    mouseover: () => {
        console.log('El puntero del mouse esta sobre el boton');
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = 'nombre'
console.log(obj[myKey]);

myKey = 'keypress';
obj[myKey]();

myKey = 'mouseover';
obj[myKey]();

let myArray = [];

myArray.push(4);
myArray.push('Una cadena');
myArray.push(obj);
myArray.push(() => {
    console.log('Hola desde un array');
})
console.log(myArray);

myArray[2].mouseover;

let funcArray = [];

    funcArray.push(() => {
    console.log("Function 1");
});

    funcArray.push(() => {
    console.log("Function 2");
});

    funcArray.push(() => {
     console.log("Function 3");
    });

console.log(funcArray);

funcArray.forEach((item) => {
    item();
})
