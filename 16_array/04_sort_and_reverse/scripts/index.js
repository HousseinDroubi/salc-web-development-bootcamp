const array = [10, 30, 15, "Houssein", "Hady", null, [true, false], 10];
console.log(array); // [10, 30, 15, "Houssein", "Hady", null, [true, false], 10]

array.sort();

console.log(array); // [10, 10, 15, 30, "Hady", "Houssein", null, [true, false]]

array.reverse();

console.log(array); // [[true, false], null, "Houssein", "Hady", 30, 15, 10, 10]