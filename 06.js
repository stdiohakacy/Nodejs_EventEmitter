'use strict';

let EventEmitter = require('events');

class Dialog extends EventEmitter {
    constructor() {
        super();
        this.message = 'Hello';
    }

    doSth(data) {
        console.log(`${this.message} : ${data}`);
        this.emit('hello', data);
    }
}


module.exports = Dialog;
