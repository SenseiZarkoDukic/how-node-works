const EventEmiter = require("events");

const myEmitter = new EventEmiter();

class Sales extends EventEmiter {
  constructor() {
    super();
  }
}

// Observer pattern
myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Jonas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock`);
});

myEmitter.emit("newSale", 9);
