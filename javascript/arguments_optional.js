/* Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

// USE arguments

function addTogether() {
    // Store the function arguments in a, b for later use
    const [a, b] = arguments;
    // If the first argument is not a number, return undefined
    if (typeof (a) !== "number") return undefined;
    // If the second argument is undefined, return a new function that uses the current first argument and a new one
    if (b === undefined) return b => addTogether(a, b);
    // If the second argument is defined, but not a number, return undefined
    if (typeof (b) !== "number") return undefined;
    // Last case, both defined and numbers, return the sum
    return a + b;
}

var sumTwoAnd = addTogether(2);
console.log(sumTwoAnd(3));
// console.log(addTogether(2, "3"));