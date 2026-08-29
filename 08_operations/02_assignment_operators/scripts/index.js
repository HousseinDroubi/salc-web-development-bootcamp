// =, +=, -=, *=, **=, %=

let number = 10;

number = number + 10;

number += 10; // Same as => number = number + 10 // 30
number -= 10; // Same as => number = number - 10 // 20
number *= 10; // Same as => number = number * 10 // 200
number /= 10; // Same as => number = number / 10 // 20
number %= 3; // Same as => number = number % 3 // 2
number **= 3; // Same as => number = number ** 3 // 8

console.log(`number is ${number}`);