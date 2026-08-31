// >
// <
// >=
// <=
// ==
// !=
// ===
// !==

// The difference between == and === is:
    // == checks for the equality only
    // === checks for the equality as well as data type

console.log(10 > 5); // true

console.log(10 < 5); // false

console.log(10 >= 5); // true

console.log(10 <= 5); // false

console.log(10 == 5); // false

console.log(10 != 5); // true

console.log(10 * 2 == 20); // true
console.log(10 * 2 - 5 != 14); // true

// ==, ===, != and !==

console.log(2 == "2"); // true
console.log(2 === "2"); // false

console.log(3 != "3"); // false
console.log(3 !== "3"); // true

console.log(true == 1); // true
console.log(false == 0); // true

console.log(true === 1); // false
console.log(false === 0); // false

console.log(undefined == null); // true
console.log(undefined === null); // false