const event = require("node:events");

const eventEmitter = new event.EventEmitter();

// create an event handler
function eventHandler(){
    console.log("That was a scream event!");
}

// assign the event handler to an event
eventEmitter.on("scream",eventHandler);

// fire the scream event
eventEmitter.emit("scream");