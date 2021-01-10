const reverseGeocode = require('./geocode')
reverseGeocode({ lat: 19.281527, lon: -103.725145 }, (error, dataResponse) => {
    //evaluacion de la respuesta
    if (error) {
        //si hay error, imprimo mensaje en pantalla
        console.log(`Ocurrio algun error`);
        return;
    }
    //a esta linea solo se puede llegar cuando NO hay error
    //imprimo los datos que vienen de las respuesta de la peticion
    console.log(`Vives en:${dataResponse.road}`)
})