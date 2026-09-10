// Find will return the last dedicated index of the array upon the condition

const nums = [100, 15, -30, -40, 3];

const result = nums.findLastIndex((value) => {
    return value % 2 != 0;
});

console.log(`The last index of an odd number is ${result}`);