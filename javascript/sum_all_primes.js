/* Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num. */

function sumPrimes(num) {
    // create array to store primes
    let primes = [];
    // count up starting from 2
    for (let i = 2; i <= num; i++) {
        // assume it is prime
        let result = true;
        // count up starting from 2 until half of the number
        for (let j = 2; j <= Math.floor( i / 2 ); j++) {
            // if it is divisible by any of these factors, it is not prime
            if (i % j == 0) {
                result = false;
            }
        }
        // if it passed the test, add it to the list
        if (result) {primes.push(i)}
    }

    // use reduce method to add up all the elements of the array and return the sum
    return primes.reduce((a, b) => a + b);
  }
  
  console.log(sumPrimes(100));