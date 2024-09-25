const object = {
    who: 'World',
    greet() {
        return `Hello, ${this.who}!`;
    }, farewell: () => {
        return `Goodbye, ${this.who}!`;
    }
};
console.log(object.greet());
console.log(object.farewell());

// The first console.log will return "Hello World!"
// because it is a regular method that belongs to an object.

// The second colsole.log will return "Goodbye undefined!" 
// because an arrow function doesn't automatically bind the this
// keyword to the object that the method belongs to. Instead 
// it inherits the outer scope where the function is defined.

// The outer scope in this object is the global scope, like 3 
// thru 7 is the inner object, or the box object, and this is 
// why it will return undefined.