const request = require('../peticiones_http/node_modules/postman-request');
let coordenada = { lat: 19.281527, lon: -103.725145 }
const reverseGeocode = (coordenada, callback) => {
    request(`https://api.opencagedata.com/geocode/v1/json?key=a8e6032a814c499cae0a1621369b36f9&q=${coordenada.lat},${coordenada.lon}&pretty=1`, function (error, response, body) {
        if (error) {
            //     error                                //data
            callback('Ocurrio algun error con la busqueda', undefined);
            return;
        } else {
            let data = JSON.parse(body);

            //request('url', () => { })

            //error     //data regresa un objeto
            callback(undefined, {
                road: data.results[0].components.road,
                state: data.results[0].components.state,
                country: data.results[0].components.country,
                postcode: data.results[0].components.postcode
            });
        }
    });
}
module.exports = reverseGeocode;