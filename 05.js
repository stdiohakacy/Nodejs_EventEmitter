let Emitter = require('./04');
let emitter = new Emitter();

emitter.on('bad', function() {
    console.log('Bad');
});

emitter.on('bad', function() {
    console.log('notify');
});

let scores = [10, 4];

for (const s of scores) {
    if (s < 5) {
        console.log('Bad');
        emitter.emit('bad');
    }
}
