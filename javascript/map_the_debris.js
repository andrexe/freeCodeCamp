/* Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].

*/


function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    // Declare empty result array
    let result = [];
    // Iterate through the input objects
    for (let i in arr) {
        // Create new variable for the orbit's semi-major axis = altitude + earth radius
        let axis = arr[i].avgAlt + earthRadius;
        // Create new variable for the orbital period = 2 PI sqrt (axis^3 / GM); rounded
        let orbPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(axis, 3) / GM));
        // Push a new object with the original name and orbital period instead of the altitude into the result array
        result.push({ name: arr[i].name, orbitalPeriod: orbPeriod });
        // console.log(arr[i].avgAlt);
    }
    // Return the new array
    return result;
}

console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]));