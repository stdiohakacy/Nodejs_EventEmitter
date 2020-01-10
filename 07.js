let Dialog = require('./06');
let dialog = new Dialog();

dialog.on('hello', function(data) {
    console.log('Notify', data);
});


dialog.doSth('The rock');
