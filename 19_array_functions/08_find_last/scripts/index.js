// Find will return the last dedicated element inside the array upon the condition

const nums = [100, 15, -30, -40, 3];

const result = nums.findLast((value) => {
    return value % 2 != 0;
});

console.log(`The last odd number is ${result}`);