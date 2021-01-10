const e mitter = require('events');
const config = require('./config.js');
let emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello');
});

emtr.on(config.events.GREET, () => {
    console.log('A greeting has occured');
});

console.log(emtr);
emtr.emit('Greet');