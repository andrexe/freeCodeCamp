// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(arr) {
    // create copy of the initial array - optional
    let newArr = [...arr];
    // go through the rest of the function's arguments
    for (let i = 1; i < arguments.length; i++) {
        // for each argument, filter the array to only keep values DIFFERENT from the arguments
        newArr = newArr.filter(x => x !== arguments[i])
    }
  
    console.log(newArr);
    return newArr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// seek and destroy with .includes() method, storing arguments in an array toBeDestroyed
  function destroyerImproved(arr, ...toBeDestroyed) {
      //filter the array to keep values that are !NOT INCLUDED in the toBeDestroyed array
    return arr.filter(value => !toBeDestroyed.includes(value))
  }

  console.log(destroyerImproved([1, 2, 3, 1, 2, 3], 2, 3, 4));
  