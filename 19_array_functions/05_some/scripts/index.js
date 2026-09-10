// some will return a boolean

const nums = [100, 0, -30];

// This mean the result is true if at least one value is greater than 50
const result = nums.some((value)=>{
    return value > 50;
});

console.log(result);
