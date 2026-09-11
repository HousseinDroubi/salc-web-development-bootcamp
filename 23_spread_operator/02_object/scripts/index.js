// Spread operator does a shallow copy
let obj1 = {
    name:"Houssein",
    age: 29,
};

let obj2 = {...obj1};

console.log("---Before updating age---");
console.log(`Age in obj1 is: ${obj1.age}`);
console.log(`Age in obj2 is: ${obj2.age}`);

console.log("---After updating age---");

obj1.age = 30;

console.log(`Age in obj1 is: ${obj1.age}`);
console.log(`Age in obj2 is: ${obj2.age}`);


console.log("----------------------------------");

obj1 = {
    name:"Houssein",
    age: 29,
    address:{
        country:"LB",
        current_place:"Beqaa"
    }
};

obj2 = {...obj1};

console.log("---Before updating current place in address ---");
console.log(`Current place in obj1 is: ${obj1.address.current_place}`);
console.log(`Current place in obj2 is: ${obj2.address.current_place}`);

console.log("---After updating current place in address ---");

obj1.address.current_place = "Beirut";
console.log(`Current place in obj1 is: ${obj1.address.current_place}`);
console.log(`Current place in obj2 is: ${obj2.address.current_place}`);
