/* Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

*/

// Calculate the change due
// Compare to the total cash available
// Divide the change due by the currency units, one by one, starting with the largest
// While there is still change due
// if (Math.floor(change / UNIT) >= 1) { add that many units }
// subtract that value from the change due and repeat with the next, smaller unit
// If you cannot return the exact change, this method will either run out of money or return more change than required - in those cases need to return status: INSUFFICIENT_FUNDS

// Need to work in cents to avoid floating point math decimal issues

function checkCashRegister(price, cash, cid) {
    // Define empty array for result
    let result = [];
    // Define array of units in cents
    let units = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
    // Define money variable and store the total amount available
    let money = 0;
    for (let i in cid) {
        money += (cid[i][1] * 100);
    };
    // Caluclate change needed
    let change = (cash - price) * 100;
    // Go through the units
    for (let i in units) {
        // If the change required is more than the unit
        if (units[i] <= change) {
            console.log('unit considered: ' + units[i]);
            // Store how much money is available
            let available = cid[cid.length - i - 1][1] * 100;
            console.log(available);
            if (available > 0) {
                // As long as you still require more change than the unit value and there is still money left
                while (change >= units[i] && available >= units[i]) {
                    // Subtract one unit from the available
                    available -= units[i];
                    // Reduce the change required with one unit
                    change -= units[i];
                    // Reduce the total amount available with one unit
                    money -= units[i];
                }
                // Add to the result the unit and the value
                // if (cid[cid.length - i - 1][1] * 100 - available > 0) {
                result.push([cid[cid.length - i - 1][0], (cid[cid.length - i - 1][1] * 100 - available) / 100])
                // 
            }
        }
    }
    if (money < 0 || change > 0) {
        return { 'status': "INSUFFICIENT_FUNDS", 'change': [] }
    }
    if (money == 0) {
        return { 'status': "CLOSED", 'change': cid }
    }
    return { 'status': "OPEN", 'change': result };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 5], ["NICKEL", 0.1], ["DIME", 0.3], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

