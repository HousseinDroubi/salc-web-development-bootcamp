// variable++ -> use the variable as it is, then later on increment it by 1 
// ++variable -> before using the variable, increment it by 1 then use it

// variable-- -> use the variable as it is, then later on decrement it by 1 
// --variable -> before using the variable, decrement it by 1 then use it

let number = 10;

console.log(`number is ${number}`); // 10
console.log(`Number is ${number++}`); // 10
console.log(`Number is ${++number}`); // 12
console.log("---------------------------------");
console.log(`Number is ${number--}`); // 12
console.log(`Number is ${--number}`); // 10