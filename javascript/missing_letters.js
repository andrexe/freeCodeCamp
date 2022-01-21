/* Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/

// str.charCodeAt(i) returns the ASCII code of the current character
// String.fromCharCode returns the letter using the ASCII code

function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i) + 1 !== str.charCodeAt(i+1)) {
            return String.fromCharCode(str.charCodeAt(i) + 1)
        }
    }
    return undefined;
  }
  
  console.log(fearNotLetter("abce"));