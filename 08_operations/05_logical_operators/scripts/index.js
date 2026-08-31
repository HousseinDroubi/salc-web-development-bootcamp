// && --> all conditions must be true in order to output true
// ||
// !

let number_of_students;
let temperature;
let result;

// &&
// Here for example, I need the number of students > 3 and temperature > 20 in order to give the class

number_of_students = 5;
temperature = 12;

console.log(number_of_students > 3); // true
console.log(temperature > 20); // false

result = number_of_students > 3 && temperature > 20;
console.log(result); // false -> true && false


// ||
// Here for example, I need the number of students > 3 or temperature > 20 in order to give the class

number_of_students = 5;
temperature = 12;

console.log(number_of_students > 3); // true
console.log(temperature > 20); // false

result = number_of_students > 3 || temperature > 20;
console.log(result); // true -> true || false

// !
// Here for example, I need the number of students to be not less than or equal 3 to give the class

number_of_students = 5;
console.log(number_of_students > 3); // true
console.log(!(number_of_students <= 3)); // true -> !false
