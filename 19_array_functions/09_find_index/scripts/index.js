// Find will return the first dedicated index of the array upon the condition

const nums = [100, 15, -30, -40, 3];

const result = nums.findIndex((value) => {
    return value % 2 != 0;
});

console.log(`The first index of an odd number is ${result}`);