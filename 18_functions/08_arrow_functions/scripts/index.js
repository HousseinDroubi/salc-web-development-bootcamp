console.warn("Arrow function, no params");
// function sayHi(){
//     console.log("Hi");
// }
// In arrow function way:

// const sayHi = () => {
//     console.log("Hi");
// }

// In arrow function, but in simpler way since it contains only one line

const sayHi = () => console.log("Hi");

sayHi();
console.warn("Arrow function, one param");
// function sayHello(username){
//     console.log(`Hey ${username}`);
// }

// In arrow function, but in simpler way since it contains only one line
// const sayHello = (username) => console.log(`Hey ${username}`);

// In arrow function, but in more simple way since it contains only one line, and only one parameter

const sayHello = username => console.log(`Hey ${username}`);

sayHello("Ali");

console.warn("Arrow function, multiple params");
console.log("-----------------------");

// function summation(n1, n2){
//     return n1 + n2;
// }
// In arrow function way:

// const summation = (n1,n2) => {
//     return n1 + n2;
// }

// In arrow function, but in simpler way since it contains only one line

const summation = (n1,n2) => n1+n2;

console.log(summation(10,15));
console.log("-----------------------");