// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// translatePigLatin("california") should return the string aliforniacay.

// translatePigLatin("paragraphs") should return the string aragraphspay.

// translatePigLatin("glove") should return the string oveglay.

// translatePigLatin("algorithm") should return the string algorithmway.

// translatePigLatin("eight") should return the string eightway.

// Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.

// Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.

/* GOOD TRY, BUT ULTIMATELY FAILED ATTEMPT - RECURSIVENESS OVERKILL

function translatePigLatin(str) {
    let vowelRegex = /^[aeiouAEIOU]/;
    let result = str;

    function vowelCheck(letter) {
        return vowelRegex.test(letter);
    }

    if (vowelCheck(str)) {
        return str + 'way';
    } else {
        result = str.split('');
        result.push(result.shift());
        let i = 0;
        function converter(word){
            if (vowelCheck(word[i])) {
                return word.join('') + 'ay';
            } else {
                word.push(word.shift());
                console.log('here');
                i++;
                converter(word);
            }
            
        }

        return converter(result);
        
    }
    console.log(result);
    // return result;
  }
  
  console.log(translatePigLatin("nnconsonant")); */

function translatePigLatin(str) {
    // Create variables
    var result = '';
    //global, case-insensitive target for vowels
    var regex = /[aeiou]/gi;

    // Checking and adding "way" if the first character is a vowel
    if (str[0].match(regex)) {
        result = str + "way";
        // Checking and adding "ay" if the words is just consonants
    } else if (str.match(regex) == null) {
        result = str + "ay";
    } else {
        // Count how many consonants before the first vowel
        // Find the index of the first vowel that the regex matches
        let vowelIndex = str.indexOf(str.match(regex)[0]);

        // Slice and add up the string starting with the first vowel, the consonants at the start, and the "ay"
        result = str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
    return result;
}

console.log(translatePigLatin("cranberry"));