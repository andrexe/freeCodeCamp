/* DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array. */


// Initial thought process: 
// Create an array and start iterating through the string
// Add each letter to an array inside the result array, along with its pair, using a switch statement
function pairElement(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push([]);
        result[i].push(str[i]);
        switch(str[i]) {
            case "A":
                result[i].push("T");
                break;
            case "T":
                result[i].push("A");
                break;
            case "C":
                result[i].push("G");
                break;
            case "G":
                result[i].push("C");
                break;            
        }
    }
    return result;
  }
  
  console.log(pairElement("GCG"));