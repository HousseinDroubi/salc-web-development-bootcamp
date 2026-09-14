// Promise.all([promises]): Waits for all promises to succeed. If any promise fails, the whole thing
// fails.
// If the first promise fails, Promise.all won't wait for other promises

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
            resolve("Promise 3");
        }, 4000);
    });
};

const array = [getPromiseOne(),getPromiseTwo(),getPromiseThree()];

Promise.all(array)
    .then(([promise_data_1,promise_data_2,promise_data_3])=>{
        console.log(promise_data_1)
        console.log(promise_data_2)
        console.log(promise_data_3)
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("Promises ended")
    });