// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.

// spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.

// spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.

// spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.

// spinalCase("AllThe-small Things") should return the string all-the-small-things.

// rules: leave dashes, turn spaces and _ into dashes, add dash before capital letters, lowercase

function spinalCase(str) {
    let result = str
        //split every time you encounter a space, or an underscore, or BEFORE a capital letter
        .split(/\s|_|(?=[A-Z])/)
        //join the elements with a dash in-between
        .join('-')
        //lowercase everything
        .toLowerCase();
    return result;
  }
  
  console.log(spinalCase('ThisIs-spinal_Tap camelCase'));
  // should return this-is-spinal-tap