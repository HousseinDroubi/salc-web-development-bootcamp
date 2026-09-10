// Find will return the first dedicated element inside the array upon the condition

const nums = [100, 15, -30, -40, 3];

const result = nums.find((value) => {
    return value % 2 != 0;
});

console.log(`The first odd number is ${result}`);