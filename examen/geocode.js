const request = require('../peticiones_http/node_modules/postman-request');
const reverseGeocode = (lugar, callback) => {
    request(`http://api.airvisual.com/v2/city?city=${lugar.city}&state=${lugar.state}&country=${lugar.country}&key=a94b98f0-b330-4b39-b13b-89fc60976c74`, function (error, response, body) {
        if (error) {
            callback('Ocurrio algun error con la busqueda', undefined);
            return;
        } else {
            let data = JSON.parse(body);

            callback(undefined, {
                city: data.city,
                state: data.state,
                country: data.country,
            });
        }
    });
}
module.exports = reverseGeocode;