function greet2(miNombre) {
    console.log('Hello ' + miNombre);
}
greet2("Luis");

function greet() {
    console.log("Hello ");
}
greet();
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

let greetMe = function () {
    console.log('Hello from function expression')
}
greetMe();

let greetMe2 = () => console.log('Hello from function expression')
greetMe2();

function cuadrado1(numero) {
    return numero * numero;
}

console.log(cuadrado1(9));

let cuadrado2 = numero => {
    return numero * numero;
}

console.log(cuadrado2(8));

let cuadrado3 = numero => numero * numero;
console.log(cuadrado3(7));