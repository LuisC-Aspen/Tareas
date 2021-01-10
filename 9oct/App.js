//let greet = () => console.log("Hello from greet");

function logGreeting(fn) {
    fn();
}

logGreeting(() => console.log("Hello from greet"));
//
function greet() {
    console.log("Hello")
}
//
let logGreeting1 = (miparametro) => miparametro();

logGreeting1(greet);
//
let logGreeting2 = (miparametro) => miparametro();
logGreeting2(function () {
    console.log("Hello from a function created on the fly")
})
//
let logGreeting3 = (minombre, micolor) => {
    console.log("Hola " + minombre + " Buenos dias, tu color favorito es: " + micolor)
}
logGreeting3("Luis", "azul")
//
let logGreeting4 = (minombre, micolor) => {
    console.log(`Hola ${minombre}  Buenos dias, tu color favorito es ${ micolor }`)
}
logGreeting4("Luis", "azul")
//
valores = {
    nombre: "Luis",
    color: "azul"
}
let logGreeting5 = (minombre, micolor) => {
    console.log(`Hola ${valores.nombre}  Buenos dias, tu color favorito es ${valores.color}`)
}
logGreeting5(valores);
//
let alumnos = {
    nombre: "Luis", nota: 6
};
console.log(`${alumnos.nombre} ${alumnos.nota > 5 ? "aprobado" : "suspendido"}`);
console.log(`Calificacion x 2: ${alumnos.nota * 2}`);
//
let kevin = {
    profile_image: 'https://elcorreoweb.es/binrepository/675x400/0c0/0d0/none/10703/PPLL/zorro_20472215_20200720165227.jpg',
    name: 'Kevin',
    title: 'Mover, Shaker, Risk Taker'
}

let get_user_widget_markup = (user) => {
    return `<div class="user-profile">
    <img src="${user.profile_image}" alt="" class="user-image">
    <h2 class="user-name"> ${user.name}</h2>
    <p class="user-title">${user.title}</p>
    </div>`
}

console.log(get_user_widget_markup(kevin));
//
function get_user_widget_markup2(user) {
    return [
        '<div class="user-profile">',
        '<img src="' + user.profile_image + '" alt="" class="user-image">',
        '<h2 class="user-name">',
        user.name,
        '</h2>',
        '<p class="user-title">',
        user.title,
        '</p>',
        '</div>'
    ].join('')
}

console.log(get_user_widget_markup2(kevin));