const obj = {
    name: "Houssein",
    age: 28,
    graduate: false,
};

// const printData = (obj) => {
//     // name is Houssein
//     console.log(`name is ${obj.name}`);

//     // age is 28
//     console.log(`age is ${obj.age}`);

//     // graduate is false
//     console.log(`graduate is ${obj.graduate}`);
// }

// // Or you can do the following

// const printData = (obj) => {
//     const name = obj.name;
//     // name is Houssein
//     console.log(`name is ${name}`);

//     const age = obj.age;
//     // age is 28
//     console.log(`age is ${age}`);

//     const graduate = obj.graduate;
//     // graduate is false
//     console.log(`graduate is ${graduate}`);
// }


// // Or you can do the following using destructuring

// const printData = (obj) => {
//     const {name} = obj;
//     // name is Houssein
//     console.log(`name is ${name}`);

//     const {age} = obj;
//     // age is 28
//     console.log(`age is ${age}`);

//     const {graduate} = obj;
//     // graduate is false
//     console.log(`graduate is ${graduate}`);
// }

// Or you can do the following using destructuring of object inside params

const printData = ({name, age, graduate}) => {
    // name is Houssein
    console.log(`name is ${name}`);

    // age is 28
    console.log(`age is ${age}`);

    // graduate is false
    console.log(`graduate is ${graduate}`);
}


printData(obj);