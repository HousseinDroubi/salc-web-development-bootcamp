// let i = 0;

// while(i<3){
//     console.log(`Number is ${i}`);
//     i++;
// }

// You can do the following:

// let i = 0 will be executed only one time
// i<3 will be checked at the beginning of each iteration
// i++ will be executed at the end of each iteration

console.log("for loop basic example");
for(let i = 0; i<3; i++){
    console.log(`Number is ${i}`);
}

console.log("------------------------------------");

console.log("for loop with array");

const array_1 = ["a", "b", "c"];

for(let i = 0; i<array_1.length; i++){
    console.log(`Number is ${array_1[i]}`);
}

console.log("------------------------------------");
console.log("for in");

const array_2 = ["a", "b", "c"];

for(const index in array_2){
    console.log(`Index is ${index}`);
}

console.log("------------------------------------");
console.log("for of");

const array_3 = ["a", "b", "c"];

for(const element of array_3){
    console.log(`Element is ${element}`);
}