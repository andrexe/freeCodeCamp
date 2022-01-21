/* Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples. */

// Method 1: set initial array as result, go through each additional array comparing with all elements in the first and only adding the elements that aren't there yet - 15 comparisons with the first example
// Method 2: merge and flatten all arrays and go through the result deleting every element whose index doesn't match indexOf()

function uniteUnique(arr) {
    let result = [...arguments].flat(Infinity);

    for (let i = 0; i < result.length; i++) {
        if (result.indexOf(result[i]) !== i) {
            result.splice(i,1);
            i--;
        }
    }

    return result;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));