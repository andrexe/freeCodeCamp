/* Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

*/

// SCM = LCM = Least Common Multiple
// GCF = GCD = Greatest Common Factor / Divisor
// LCM x GCD = Product of all numbers
// Therefore SCM = Product / GCD
// https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclidean_algorithm
// GCD = repeat a % b, a = b, b = a % b until 

function smallestCommons(arr) {
  // Sort the input numbers in ascending order and assign min and max accordingly
  const [min, max] = arr.sort((a, b) => a - b);
  console.log(min);
  console.log(max);
  // Create an array of the appropriate length, according to the range, fill it with 0s and assign min + index to each element => min, min + 1, min +2 etc
  const result = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  console.log(result);
  // Calculate gcd by following Euclidean algorithm. Find the remainder a mod b and repeat the operation by replacing (a,b) with (b, a mod b) until a mod b becomes 0. The first argument will be the gcd.
  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
  // Calculate lcm by using gcd. lcm = product of all numbers divided by their gcd. References previous formula.
  const lcm = (a, b) => a * b / gcd(a, b);
  // Bring formulas together by reducing our array using the lcm algorithm, which references the gcd algorithm.
  return result.reduce((multiple, curr) => lcm(multiple, curr));
}

console.log(smallestCommons([23, 18]));