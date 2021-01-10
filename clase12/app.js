const reverseGeocode = require('./geocode')
const weather = require('./weather')

reverseGeocode({ lat: 19.281527, lon: -103.725145 }, (error, dataResponse) => {
    if (error) {
        console.log(`Ocurrio algun error`);
        return;
    }
    console.log(`Vives en:${dataResponse.road}`)
})

let site = 'Colima, Mexico';
weather(site, (error, weatherResponse) => {
    if (error) {
        console.log(`Ocurrio algun error`);
        return;
    }
    console.log(`La temperatura actual de Colima es ${weatherResponse.temperature}`)
})
