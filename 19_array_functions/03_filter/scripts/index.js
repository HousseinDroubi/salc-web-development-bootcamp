// To know if the number is even -> number % 2 == 0
// To know if the number is odd -> number % 2 != 0

// filter will loop over the entire array and retuns a new array with minimum length of 0 and maximum length of the original array's length

const array_1 = [10, 35, 20, 30, 81];

// The following function is to filter the numbers that are divided by 3
let new_array = array_1.filter((value)=>{
    return value % 3 == 0;
});

console.log(new_array);

console.log("---------------");

// The following function is to filter the numbers that are even
new_array = array_1.filter((value)=>{
    return value % 2 == 0;
});

console.log(new_array);
console.log("---------------");


// The following function is to filter the numbers that are even3
new_array = array_1.filter((value)=>{
    return value % 2 != 0;
});

console.log(new_array);
console.log("---------------");
