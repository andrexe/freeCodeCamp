/* Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

1 5     10 50       100 500     1000
I V     X  L        C   D       M

*/

function convertToRoman(num) {
    // Define array of letters to be used
    const numerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    // Declare a decimal counter to be used later for picking the correct numeral, we start with units
    let d = 0;
    // Define empty array to hold result
    let result = [];
    // Make a copy to alter, in order to preserve the original input
    let number = num;

    // Repeat these steps as long as there are digits to transform
    while (number >= 1) {
        console.log(number);
        // Store the remainder of dividing the number by 10 in a variable to be checked later
        let rem = Math.floor(number % 10);
        console.log(rem);
        // If the variable's remainder when dividing with 5 is smaller than 4 insert I, X, C or M for every unit
        // For 1 2 3 6 7 8
        if (rem % 5 < 4) {
            for (let i = 0; i < rem % 5; i++) {
                result.unshift(numerals[d]);
            }
        }
        // If the variable is between 4 and 8, inclusively, insert V, L, or D once
        // For 4 5 6 7 8
        if (rem >= 4 && rem <= 8) {
            result.unshift(numerals[d + 1]);
        }
        // If the variable is exactly 9, insert the next order letter
        // For 9
        if (rem == 9) {
            result.unshift(numerals[d + 2]);
        }
        // If the variable's remainder when dividing with 5 is exactly 4, insert I, X, C, or M once (to subtract one from the previously inserted numeral)
        // For 4 9
        if (rem % 5 == 4) {
            result.unshift(numerals[d]);
        }
        // Divide the number by 10
        number /= 10;
        // Increment the decimal counter by 2 I -> X -> C -> M
        d += 2;
    }
    // Join the result array to return a single string
    return result.join('');
}

console.log(convertToRoman(36));