const request = require('postman-request');
request('https://api.opencagedata.com/geocode/v1/json?key=a8e6032a814c499cae0a1621369b36f9&q=19.281527,-103.725145&pretty=1', function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    let data = JSON.parse(body);
    console.log(`Tu calle es: ${data.results[0].components.road} 
    en el barrio de: ${data.results[0].components.neighbourhood} 
    en el pais de: ${data.results[0].components.country} 
    y estado de: ${data.results[0].components.state}`);
    //console.log(data);
});

console.log('Hola mientras contesta');
