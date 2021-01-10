const request = require('../peticiones_http/node_modules/postman-request');
let site = 'Colima, Mexico'
const weather = (site, callback) => {
    request('http://api.weatherstack.com/current?access_key=1bf26e32b6ced03b71ee2b54ab94ddf9&query=${site}', function (error, response, body) {
        if (error) {
            callback('Ocurrio algun error con la busqueda', undefined);
            return;
        }
        else {
            let data = JSON.parse(body);

            callback(undefined, {
                temperature: data.current.temperature,
                forecast: data.current.weather_descriptions
            });
        }
    });
}
module.exports = weather;
