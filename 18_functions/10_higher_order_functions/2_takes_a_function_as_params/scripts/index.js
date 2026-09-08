const greet = (name) => {
    return `Hello ${name}`;
}

const processUserInput = (callback, name) => {
    return callback(name);
}
const result = processUserInput(greet, `Houssein`);
console.log(result);

// Or you can do the following in a bit harder way:
// Let's say I want to implement the function as anonymous
// const result = processUserInput((name)=>{
//     return `Hello ${name}`;
// },`Houssein`);

// console.log(result);