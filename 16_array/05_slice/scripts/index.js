const array = [10, 20, 30, 40, 50];

const array_1 = array.slice();

console.log(array);
console.log(array_1);
console.log("---------------------------------------");
const array_2 = array.slice(2); // start from index 2 to the end of the array
console.log(array); // [10, 20,30, 40, 50]
console.log(array_2); // [30, 40, 50]
console.log("---------------------------------------");

const array_3 = array.slice(2, 4); // starting from index 2 to index 4 (but 4 is execluded)
console.log(array); // [10, 20,30, 40, 50]
console.log(array_3); // [30, 40]