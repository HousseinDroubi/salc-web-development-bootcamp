function sayHi(username = "guest", age = "unkown"){ // params
    console.log(`Hi, my name is ${username} and I'm ${age} years old`);
}

sayHi("Ali", 29);
sayHi("Ali");
sayHi();