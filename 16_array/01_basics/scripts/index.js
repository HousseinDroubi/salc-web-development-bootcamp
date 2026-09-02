const array = [10, 30, 15, "Houssein", "Hady", null, [true, false]];


console.log(array[0]); // 10
console.log(array[2]); // 15

console.log(array[6]); // [true, false]
console.log(array[6][0]); // true
console.log(typeof array); // objet
console.log(typeof array[0]); //number
console.log(typeof array[6]); //object
console.log(Array.isArray(array)); // true