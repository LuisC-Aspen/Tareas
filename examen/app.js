let reverseGeocode = require('./geocode')
let pollution = require('./pollution')

reverseGeocode({ city: 'Colima', state: 'Colima', country: 'Mexico' }, (error, dataResponse) => {
    if (error) {
        console.log("Ocurrio un error");
        return;
    }
    console.log(`Lugar del que se obtienen los datos es, Ciudad: ${dataResponse.city} , del estado de: ${dataResponse.state} , y del país de: ${dataResponse.country}`)


    pollution(dataResponse, (error, pollutionResponse) => {
        if (error) {
            console.log("Ocurrio un error");
            return;
        }
        console.log(`Información de pollution, el ts es: ${pollutionResponse.ts} , el aqius es: ${pollutionResponse.aqius} , el mainus es: ${pollutionResponse.mainus} , el aqicn es: ${pollutionResponse.aqicn} , el maincn es: ${pollutionResponse.maincn}`)
    });

});