const EventEmiter = require("events");

const myEmitter = new EventEmiter();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Jonas");
});

myEmitter.emit("newSale");
