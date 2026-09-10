const data = {
    name: "Houssein",
    age: 28,
};

// const name = data.name;
// Or you can do the following:

const {name} = data;

console.log(`name is ${name}`);

// const age = data.age;
// Or you can do the following:

const {age} = data;

console.log(`age is ${age}`);