const gender = "M";

// if(gender === "M"){
//     console.log("Hello Mr");
// }else{
//     console.log("Hello Mrs");
// }


// Using ternary operator

// Method 1
gender === "M" ?  console.log("Hello Mr") : console.log("Hello Mrs");

// Method 2
console.log(gender === "M" ? "Hello Mr" : "Hello Mrs");

// Method 3
console.log(`Hello ${gender === "M" ? "Mr" : "Mrs"}`);

// Method 4
console.log(`Hello Mr${gender ==="M" ? "" : "s"}`);
