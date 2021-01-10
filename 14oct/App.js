let funcion = require('./greet')

funcion();

let datosPersona = {
    nombre: "Carlos",
    edad: 44,
    calle: {
        nombre: "Madero",
        numero: 544
    },

    getName: function () {
        return 'Tu nombre es ${this.nombre}'
    }

}


console.log(datosPersona.nombre);
console.log(datosPersona.calle.nombre);
console.log(datosPersona['nombre']);