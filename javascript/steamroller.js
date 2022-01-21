/* Steamroller
Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

!!!
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

*/

// Could use recursivity and loops to go as deep as possible into each item (until it's no longer an array, then add that element to a new array) for ()

function steamrollArray(arr) {
    // Create an empty array as the result
    const result = [];

    // Define the recursive function
    function gatherElements(arr) {
        // It iterates through each element of the array
        for (let i = 0; i < arr.length; i++) {
            // If it's not an array, it means we reached the deepest level and we push the element to the result
            if (!Array.isArray(arr[i])) {
                result.push(arr[i]);
                // console.log("result is now: " + result);
            // Otherwise, if the current element is an array, we call the function on it
            } else {
                // console.log("next :" + arr[i]); 
                gatherElements(arr[i]);
            };
        }
    }

    // Calling the function on our initial argument and returning the filled result array
    gatherElements(arr);
    return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

