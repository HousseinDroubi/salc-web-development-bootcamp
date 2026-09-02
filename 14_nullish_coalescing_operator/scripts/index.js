// ?? is the same as || but it only checks for null or undefined, not falsy values like 0, "" or false.
let price = undefined;
price ?? console.log(`The price is undefined`);
console.log(`The price is ${price ?? "undefined"}`);