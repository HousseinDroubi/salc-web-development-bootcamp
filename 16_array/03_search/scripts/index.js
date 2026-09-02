const array = [10, 30, 15, "Houssein", "Hady", null, 10, [true, false], 10];

console.log(array.indexOf(10)); // 0
console.log(array.indexOf(10, 5)); // 6
console.log(array.lastIndexOf(10)); // 8

console.log(array.indexOf(31)); // -1

console.log(array.includes(10)); // true