// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    // set the length of the array = max - min + 1
    return Array(Math.max(...arr) - Math.min(...arr) + 1)
      // fill the array with the minimum
      .fill(Math.min(...arr))
      // increment each value (min) with the index
      .map((value, idx) => value + idx)
      // reduce all elements to a sum that adds up all values
      .reduce((acc, value) => acc + value)
      ;
}
// let newArr = [4,1];
// console.log(Math.max(...newArr));

console.log(sumAll([5, 10]));


// alternative solution using formula sum = (min + max) * n / 2

function sumAlt(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return (min + max) * (max - min + 1) / 2;
}

console.log(sumAlt([5, 10]))