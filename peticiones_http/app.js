const request = require('postman-request');
request('http://api.weatherstack.com/current?access_key=1bf26e32b6ced03b71ee2b54ab94ddf9&query=Colima', function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    let data = JSON.parse(body);
    console.log(`La temperatura actual de Colima es ${data.current.temperature}`);
    //console.log(data);
});

console.log('Hola mientras contesta');
