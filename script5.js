var b = 1;
function outer() {
    var b = 2
    function inner() {
        b++;
        var b = 3;
        console.log(b);
    }
    inner();
}
outer()


// JavaScript starts reading from the inner most function, to the outer.
// If it doesn't find a resolution for variable b, it moves to the next scope
// outward