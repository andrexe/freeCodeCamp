// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

// the only drawback to the following solution is if one of the original arrays contains duplicates of an item that the second one does not contain
// e.g. [1,2,3,5], [1,2,3,4,4,5] would return [], not [4,4]

// alternative solution would be to filter first based on second, second based on first (using .filter indexOf == -1) and concat results

function diffArray(arr1, arr2) {
    //create new empty array
    const newArr = [];
    //create temporary array that contains all elements from both arrays
    let tempArr = arr1.concat(arr2);
    //filter the big array using sameIndex callback and push the results into new array
    newArr.push(tempArr.filter(sameIndex));
    //callback checks if the first index of the value == the last index aka the value is unique
    function sameIndex(value, idx, arr) {
      return arr.indexOf(value) == arr.lastIndexOf(value);
    }
    //return the flattened array to avoid deeper levels
    return newArr.flat(Infinity);
  }
  
  console.log(diffArray([1, 2, 2, 2, 3], [2]));