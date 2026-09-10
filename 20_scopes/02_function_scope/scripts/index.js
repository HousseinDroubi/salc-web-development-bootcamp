// Function scope 

console.log("--------1--------");
// console.log(x); // Error
// console.log(y); // Error
// console.log(z); // Error


const someFunction = () => {
    var z = undefined; // z hoisting
    // console.log(x); // Error
    // console.log(y); // Error
    // console.log(z); // undefined

    
    const x = 1;
    let y = 2;
    var z = 3;
}

console.log("--------2--------");

// console.log(x); // Error
// console.log(y); // Error
// console.log(z); // Error

someFunction();