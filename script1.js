function foo1() {
    return {
        bar: "Hello"
    };
}

function foo2() {
    return {
        bar: "World"
    };
}

// There should vbe a semicolon ";" at the end of the return statement. 
// JavaScript will automaticall add on if it is left out, os if there is a ; left out 
// it will automatically add a ; at the end of the return statement.
// If one is added, you will see that the output is different.

// Scope Chain Resolution - The process of resolving a variable value is 
// like a chain, so we call it scope chain. The scope chain starts with 
// the innermost (or local) scope. If the variable cannot be found in the 
// current scope, it will keep looking for the variable in the parent scope 
// and all the way up to the global scope.

console.log(foo1());
console.log(foo2());