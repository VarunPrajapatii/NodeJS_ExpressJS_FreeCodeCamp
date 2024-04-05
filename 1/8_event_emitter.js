const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id)=> {
    console.log(`Data recieved with name ${name} and id: ${id}`);
});

customEmitter.on("response", () => {
    console.log(`some other logic here`);
});

customEmitter.emit("response", "Varun", "23");