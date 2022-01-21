// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line

    // filter collection based on callback function
    return collection.filter(callback);

    function callback(obj) {
        // go through each key in the source
        for (let key in source) {
            if (
                // if the object does NOT have the key or the key does NOT match, return false aka it gets removed
                !obj.hasOwnProperty(key) || obj[key] !== source[key]
                ) {
                    return false;
                }
            
        } 
        // if and only if we went through all keys and none of them returned false can we say for sure that the object in the collection has all the same properties that the source has
        return true;
    }

  
    // Only change code above this line
    return arr;
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet", first: "Tybalt"}));