// function sayHi(){
//     console.log("Hi");
// }

// setTimeout( sayHi , 1000 );


// In order for sayHi to be anonymous function:
// Now sayHi is an anonymous function, also, setTimeout is called Higher order function
setTimeout(function sayHi(){
    console.log("Hi");
}, 1000 );


