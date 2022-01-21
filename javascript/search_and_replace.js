/*
Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog */

function myReplace(str, before, after) {
    // Check and store where the before word appears within the string
    let beforeIndex = str.indexOf(before);
    
    // Check if before is capitalized or not and do the same for after
    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        after = after.charAt(0).toLowerCase() + after.slice(1);
    };

    // Splice after instead of before - CANNOT USE SPLICE ON STRING
    // Use slice to combine first part of the sentence, replaced word, and second part of the sentence
    str = str.slice(0, beforeIndex) + after + str.slice(beforeIndex + before.length);
    return str;
  };
  
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));