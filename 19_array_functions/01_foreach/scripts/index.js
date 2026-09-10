// forEach will loop over all elements of the array and returns undefined

const nums = [10, 20, 30];

// forEach is a higer order function
// the function inside forEach is called anonymous function and it's also called callback function
nums.forEach((value, index,array)=>{
    console.log(`${value} - ${index} - ${array}`);
});

console.log("---------------------");

nums.forEach((value, index)=>{
    console.log(`${value} - ${index}`);
});

console.log("---------------------");
