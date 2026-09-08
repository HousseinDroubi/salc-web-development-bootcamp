// Only one rest params and it must be last parameter
function sum(...numbers){
    let total = 0;
    for (const element of numbers) {
        total+=element;
    }
    return total;
}

const summation = sum(10,3,2);

console.log(`summation is ${summation}`);

console.log("----------------------------");

// My name is Houssein
// The programming languages I know:
    // Java
    // TS
    // Dart
    // Python
function printDetails(username, ...languages){
    console.log(`My name is ${username}`);
    console.log("The programming languages I know: ");
    for (let index = 0; index < languages.length; index++) {
        console.log(`\t${languages[index]}`);
    }
}


printDetails("Houssein","Java","TS","Dart","Python");
printDetails("Ibrahim","JS","C","C++");
printDetails("Riva","C","Java");