emiiter.js
function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function (type) {
    if (this.events[type]) { //si existe
        this.events[type].forEach((listener) => {
            listener();
        });
    }
}

module.exports = Emitter;

let obj = {
    greet: () => {
        console.log("Hello");
    }
}

emtr.on('jump', () => {
    console.log('Someone jumped');
});