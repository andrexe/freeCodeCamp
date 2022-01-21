/* Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5. */

function sumFibs(num) {
  // sum starts at 0
  let sum = 0;
  // current number starts at 1
  let current = 1;
  // previous number starts at 0
  // every step we check if the current is still smaller than the function argument
  // to go through fibonacci numbers, the previous number gets added to the current, and we deduct the "new" previous by substracting the old previous from the "new" current. IT HAS TO BE DONE IN THIS ORDER
  // e.g. from current = 5 and prev = 3 --> current becomes 5+3 = 8, previous becomes 8-3=5
  for (let prev = 0; current <= num; current += prev, prev = current - prev) {
    // console.log("fib = " + current);

    // if the current fibonacci number is odd we add it to the sum
    if (current % 2 !== 0) {
      sum += current;
    }
    // console.log("sum = " + sum);
  }
  return sum;
}

console.log(sumFibs(10));

// 1+1+2+3+5+8 = 20
// 1 2 4 7 12 20