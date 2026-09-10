// some will return a boolean

const nums = [100, 0, -30];

// This mean the result is true if all values are greater than 50
const result = nums.every((value)=>{
    return value > 50;
});

console.log(result);
