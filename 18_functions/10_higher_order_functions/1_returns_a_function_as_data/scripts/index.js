const sayHi = () => {
    return (username) => {
        return `Hi ${username}`;
    }
}
// const result = sayHi(); // now result is a function, due to what sayHi function returns
// // so, in order to call result function, we have to add ()
// console.log(result(`Houssein`));

// Or simply you can do the following:
console.log(sayHi()(`Houssein`));

console.log("-----------------------");

const multiplier = (x) => {
    return (y) => {
        return x*y;
    }
}


const result = multiplier(10);
console.log(result(5));