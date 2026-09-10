const user = {
    name:"Houssein",
    age:29,
    address:{
        country:"LB",
        region:"Beqaa"
    },
    programming_languages : ["TS","Java","Dart", "Python"],
    sayHi: function(){ // You must use function expression
        console.log(`Hi, I'm ${this.name}, I'm ${this.age} years old`);
    }
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.address);
console.log(user.address.country);
console.log(user.programming_languages);
console.log(user.programming_languages[0]);
user.sayHi();