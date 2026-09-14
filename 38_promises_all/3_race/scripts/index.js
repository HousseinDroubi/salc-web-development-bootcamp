// Promise.race([promises]): Returns the result of the first promise that finishes (wether it
// succeeds or not).

// After 2 seconds
const getPromiseOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 1");
        }, 2000);
    });
};

// After 3 seconds
const getPromiseTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2");
        }, 3000);
    });
};

// After 4 seconds
const getPromiseThree = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise 3");
        }, 4000);
    });
};

const array = [getPromiseOne(),getPromiseTwo(),getPromiseThree()];

Promise.race(array)
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("Promises ended")
    });