/* Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated. 

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return the string Aren't bonfires fun!?

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return the string I love FreeCodeCamp!

*/

// Need to turn the initial string into an array of all the numbers, convert each into integer, then convert those integers into characters. Finally, need to concatenate all those elements back into a string.

function binaryAgent(str) {
    const result = str
        // Turn initial string into array
        .split(' ')
        // Convert each binary element into its decimal equivalent
        .map(b => parseInt(b, 2))
        // Convert each number into its string equivalent
        .map(num => String.fromCharCode(num))
        // Convert the array back into a string by concatenating all elements
        .join('');
    console.log(result);
    return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");