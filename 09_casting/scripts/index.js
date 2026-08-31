// Implicit casting - done by JS itself (automatically)

console.log("5" + 3); // "53"
console.log("5" - 3); // 2
console.log("10" - "2"); // 8
console.log("4" * "2"); // 8
console.log(true + 1); // 2
console.log(false + 1); // 1
console.log(false + false); // 0

console.log("---------------------------------------");

// Explicit casting - done by the developer (you)

console.log(Number("5") + 3); // "53"
console.log(String(123)); // 123
console.log(Boolean(0)); // false