/* 
Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

telephoneCheck("555-555-5555") should return a boolean.

telephoneCheck("1 555-555-5555") should return true.

telephoneCheck("1 (555) 555-5555") should return true.

telephoneCheck("5555555555") should return true.

telephoneCheck("555-555-5555") should return true.

telephoneCheck("(555)555-5555") should return true.

telephoneCheck("1(555)555-5555") should return true.

telephoneCheck("555-5555") should return false.

telephoneCheck("5555555") should return false.

telephoneCheck("1 555)555-5555") should return false.

telephoneCheck("1 555 555 5555") should return true.

telephoneCheck("1 456 789 4444") should return true.

telephoneCheck("123**&!!asdf#") should return false.

telephoneCheck("55555555") should return false.

telephoneCheck("(6054756961)") should return false.

telephoneCheck("2 (757) 622-7382") should return false.

telephoneCheck("0 (757) 622-7382") should return false.

telephoneCheck("-1 (757) 622-7382") should return false.

telephoneCheck("2 757 622-7382") should return false.

telephoneCheck("10 (757) 622-7382") should return false.

telephoneCheck("27576227382") should return false.

telephoneCheck("(275)76227382") should return false.

telephoneCheck("2(757)6227382") should return false.

telephoneCheck("2(757)622-7382") should return false.

telephoneCheck("555)-555-5555") should return false.

telephoneCheck("(555-555-5555") should return false.

telephoneCheck("(555)5(55?)-5555") should return false.

telephoneCheck("55 55-55-555-5") should return false.

*/

// Rules
// 10 digits + 1 optional country code in the beginning
// Optional country code has to be 1
// The numbers could be split, but it's optional
// The split has to be 3 - 3 - 4
// The split can be done with spaces, dashes or by wrapping the first part in parentheses
// Any other symbol will make the number invalid
// Any of the symbols out of place will make the number invalid

// Plan
// Filter dashes, spaces and check if there are 10, 11, 12 or 13 characters left
// 10: just number; 11: number + country; 12: number + parentheses; 13: number + country + parentheses
// If there are 11 or 13 make sure the first is 1 and eliminate it from the check
// If there are 12, make sure str[0] and str[4] are the parentheses


function telephoneCheck(str) {
    // If there are more than 16 characters or more than 2 dashes, the format is wrong
    if (str.length > 16 || (str.match(/-/g) || []).length > 2) {
        return false;
    };
    // Turn the input string into an array of characters without spaces and dashes
    let checked = str
        .replace(/-|\s/g, '')
        .split('');
    // If there are 11 or 13 characters and the first is the right country code, remove it
    if (checked[0] == 1 && (checked.length == 11 || checked.length == 13)) {
        checked.shift();
    }
    // If there are 12 characters and the parentheses are in the right locations, remove them
    if (checked[0] == '(' && checked[4] == ')' && checked.length == 12) {
        checked.splice(4, 1);
        checked.shift();
    }
    // Turn the filtered array back into a string
    checked = checked.join('');
    // If the number has 10 characters that are all digits, return true
    if (checked.length == 10 && checked.replace(/[0-9]/g, '').length == 0) {
        return true;
    }
    // If we didn't yet return true, the numbers isn't the right format
    return false;
}

console.log(telephoneCheck("5555555555"));
