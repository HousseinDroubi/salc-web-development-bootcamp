// reduce will return a number in this case

const nums = [10, 20, 30];

const total = nums.reduce((previous, value)=>{
    previous = previous + value;
    return previous;
},0);

console.log(total);