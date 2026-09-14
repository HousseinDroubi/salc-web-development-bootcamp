// Promise.allSettled([promises]): Waits for all promises to finish, regardless of success or failure.

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

Promise.allSettled(array)
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