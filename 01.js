let events = require('events');
let eventEmitter = new events.EventEmitter();

eventEmitter.on('FirstEvent', function(data) {
    console.log('First subscribe' + data);
});


eventEmitter.emit('FirstEvent', ' This is my first Node.js event emitter example.');
