let array = [10, 20, 30, 40, 50];

const array_1 = array.splice(1);

console.log(array); // [10]
console.log(array_1); // [20, 30, 40, 50] 
console.log("---------------------------------------");

array = [10, 20, 30, 40, 50];

const array_2 = array.splice(1, 2); // Cuts from index 1 and delete 2 elements - returns [20,30]
console.log(array_2); // array_2 is now [20, 30]
console.log(array); // array is now [10, 40, 50]


array = [10, 20, 30, 40, 50];
const array_3 = array.splice(1, 2, 100, 200); // Cuts from index 1 and delete 2 elements then add 100, 200
//- returns [20,30]
console.log(array); // array is now [10, 100, 200, 40, 50]