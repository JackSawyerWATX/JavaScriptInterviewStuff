//**********************/
// Front End Questions: /
//**********************/

// ~ 4 pillars of OOP:
// 	1. Abstraction
// 	2. Polymorphism
// 	3. Inheritance
// 	4. Encapsulation

// URL - Uniform Resource Locator
// IP -  Internet Protocol
// DNS - Domain Name System
// HTTP - Hypertext Transfer Protocol
// TCP - Transmission Control Protocol

//********************************************************************************/
// ~ Describe what happens when you type a URL into a browser and hit enter.      /
//********************************************************************************/

// 1. The browser translates the URL into an IP address.
// 2. The browser uses the following process to look up a DNS:
// 	1. First, it looks up the IP address in the DNS cache. If it's not there:
// 	2. Then it looks for it in the operating system cache.
// 	3. Next it sends an HTTP request to the server.
// 	4. Lastly, the browser establishes a TCP connection with the server.
// 	5. If necessary, the server reads or writes data to the database.
// 	6. The server sends back a response status code and HTML/JSON
// 	7. The browser renders a response to the end user.
// 	8. The browser repeats the process for additional resources such as JavaScript 
//      bundles and images.

// ~ What is a JavaScript closure?
// 	JavaScript closure remembers the variables and scopes of the outer function even 
//  after the outer function has finished running.

// function urlFormatter(url) {
//     const protocol = 'http';

//     return function () {
// 	console.log(protocol);
// 	console.log(`${protocol}://{url}`);
//     };
// }
// console.log(protocol); //Reference error

// Every function creates its own scope. Inside urlFormatter, there is access to the 
//  protocol variable.
// If we try to access this outside of urlFormatter, we get a reference error.
// Outer scopes can't access variables defined inside of an inner scope.
// One way to get around this is to define the inner function.

// const newURL = urlFormatter('reddit.com');
// newURL();

// This inner function is a closure that remembers the outer function scope even after 
//  the outer function has finished executing.


//***********************************************************************************/
// What is CSS specificity and what will be the color of the 2 paragraph elements?   /
//***********************************************************************************/

// Refer to the HTML and CSS files in this folder for examples. Notes will be here for 
// some reason. To keep all the notes together. 

// CSS specificity is how the browser determines which CSS property value should be 
// applied to an HTML element if there are competing selectors, or declarations. 

// There are 4 catagories that determione the specificity of a selector. 
// In order from the most specific to the least.

//  Highest -----------------------------------------> Lowest
//   0,               0,           1,               1
//  Inline Styles    ID's         Classes,         Elements,
//                                Attributes,      PsudoElements
//                                PsudoClasses

// If two selectors share the same specificity, the browser will use whichever selector 
// comes later in the document, thuse spawns the name Cascading Style Sheets.

//*********************************************************************/
// What is the difference between .map and .forEach in JavaScript?     /
// ********************************************************************/

// These are both methods that iterate through elements inside of an array.
// AND they both take a callback function that is applied to every single element in 
// the array.

// The key difference is that .forEach() returns undefined while .map() returns a new 
// array with elements that are the result of the callback function.

let numberArray = [1, 2, 3, 4, 5];

let forEachReturnValue = numberArray.forEach((num) => num * 2);
let mapReturnValue = numberArray.map((num) => num * 2);

console.log("Original Array", numberArray);
console.log("Using forEach", forEachReturnValue);

console.log("Original Array", numberArray);
console.log("Original map", mapReturnValue);

// USE .forEach() when you want tot do somethng with each array element, such as 
// displaying it or saving it to a database.

// USE .map when you want to transform array elements into a new array. For example, 
// capitalize each word.


//***************************************************************/
// Impliment a function that is wrapped in a JavaScript promise  /
//***************************************************************/

// A JavaScript promise is a JS object that represents a state at some point in the 
// future.

// They are most commonly used to handle asynchronis operations such as an API call.

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Making an API call");
        resolve();
    }, 1000);
})
    .then(() => 
        console.log("Done"));
    

//***********************************************************/
// What is the difference between a var, let, and const?     /
//***********************************************************/

// var a = 1;
// let b = 2;
// const c = 3;

// var variables can be updated and re-declared within its scope; 
// let variables can be updated but not re-declared; 
// const variables can neither be updated nor re-declared.
