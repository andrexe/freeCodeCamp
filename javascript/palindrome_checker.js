/* Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2. 

palindrome("eye") should return a boolean.

palindrome("eye") should return true.

palindrome("_eye") should return true.

palindrome("race car") should return true.

palindrome("not a palindrome") should return false.

palindrome("A man, a plan, a canal. Panama") should return true.

palindrome("never odd or even") should return true.

palindrome("nope") should return false.

palindrome("almostomla") should return false.

palindrome("My age is 0, 0 si ega ym.") should return true.

palindrome("1 eye for of 1 eye.") should return false.

palindrome("0_0 (: /-\ :) 0-0") should return true.

palindrome("five|\_/|four") should return false.

*/

function palindrome(str) {
    // \W replaces whitespaces and + makes sure that multiple white spaces in a row are also removed
    // |_ means OR underscores, aka it's also going to replace (remove) underscores
    // toUpperCase changes all letters to lowercase and it also affects the reversed later
    let testPhrase = str
        .replace(/\W+|_/g, "")
        .toUpperCase();
    // Split the string into characters to use the reverse method, then join them back together
    let reversedPhrase = testPhrase
        .split("")
        .reverse()
        .join("");

    console.log(testPhrase, reversedPhrase, testPhrase === reversedPhrase);
    // Return true if original is the same with reversed (palindrome)
    return testPhrase === reversedPhrase;
}

palindrome("My age is 0, 0 si ega ym._");