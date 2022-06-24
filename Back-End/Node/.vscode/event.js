const event  = require('node:events');
const { EventEmitter } = require('stream');

class eventClass  extends event {};

const eventVar = new eventClass();

eventVar.on('Morning',()=>{ 
    console.log('Its a new day good morning');
    setTimeout(() => {
        console.log('Reply is expected');
    }, 2000);
});
eventVar.emit('Morning'); // to call the event  