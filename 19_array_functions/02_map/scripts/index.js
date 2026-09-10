// map loops over the entire array and returns a new array with the same length of the original one

const array_1 = [10, 20, 30, 40];

const new_array = array_1.map((value)=>{
    return value / 2;
});

console.log(new_array)

