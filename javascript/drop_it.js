/* Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array. */

function dropElements(arr, func) {
    // IF the first element does NOT meet the condition AND the array is NOT empty, remove the first element and repeat.
    while (!func(arr[0]) && arr.length > 0) {
        arr.shift();
    }
    return arr;
}

console.log(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; }));