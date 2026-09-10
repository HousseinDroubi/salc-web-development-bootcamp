let n1 = 10;
let n2 = 20;

// console.log("---Before---")
// console.log(`n1 is ${n1}`);
// console.log(`n2 is ${n2}`);

// console.log("---After---")

// let temp = n1;
// n1 = n2;
// n2 = temp;

// console.log(`n1 is ${n1}`);
// console.log(`n2 is ${n2}`);


// Or you can do the following:
console.log("---Before---")
console.log(`n1 is ${n1}`);
console.log(`n2 is ${n2}`);

[n1,n2] = [n2,n1];

console.log("---After---")
console.log(`n1 is ${n1}`);
console.log(`n2 is ${n2}`);
