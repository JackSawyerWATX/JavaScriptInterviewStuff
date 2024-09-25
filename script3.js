for (var i = 0; i <= 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000 );
}


for (let j = 0; j <= 10; j++) {
    setTimeout(function () {
        console.log(j);
    }, j * 1000 );
}


// In the first block of code the setTimeout() allows the for 
// loop to finish whatever is in the callback function before it 
// logs to the console. When the for loop finishes looping, var i = 5.

// setTimeout() is an asynchronous function provided by the browser. While
// some asynchronous functions can take a long time to finish, such as an 
// API call that downloads a resource from a remote server, the rest of
// the code would be blocked from downloading while everything is compiled.

// To fix this, use the 'let' keyword (introduced in ES6).

// let is block scope, var is function scope.