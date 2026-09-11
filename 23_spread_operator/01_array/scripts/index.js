// Spread operator does a shallow copy

// Spread operator (shallow copy) in action when we have only numbers for example
let arr1 = [10,20,30,40];
let arr2 = [...arr1];

console.log(`Before updating first element at arr1`);
console.log(arr1);
console.log(arr2);

arr1[0] = 50;
console.log(`After updating first element at arr1`);
console.log(arr1);
console.log(arr2);


// Spread operator (shallow copy) in action when we have a reference objects
console.log("--------------------------------------");
arr1 = [10,20,[30,40]]; // length is 3
arr2 = [...arr1];
console.log(`Before updating first element at index 3 in arr1`);

console.log(arr1);
console.log(arr2);

console.log(`After updating first element at index 3 in arr1`);
arr1[0] = 50;
console.log(arr1);
console.log(arr2);