

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

// variable x is defines twice. Once on line 3 and agaibn on line 6.
// The variable on line 3 is available globally because it's not in a function.
// The variable on line 6 is only available inside the girl function.
// The variable is being used on line 5 before it is being declaired on line 6.
// By the time we're using the variable on line 5, it hasn't been initialized.
// When the variable is being console logged on 5, the variable hasn't been defined
// in the girl function due to JavaScript hoisting.

