//block scope like if, else, else-if, while, do-while, for, foreach, switch...

var z = undefined;
console.log("--------1--------");

// console.log(x); // Error
// console.log(y); // Error
console.log(z); // undefined


if(true){
    const x = 1;
    let y = 2;
    var z = 3;
}

console.log("--------2--------");

// console.log(x); // Error
// console.log(y); // Error
console.log(z);  // 3