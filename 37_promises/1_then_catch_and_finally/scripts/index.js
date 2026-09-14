// There are 3 cases for promises:
    // * Pending (waiting)
    // * fulfilled (done), promise used resolve function
    // * rejected (error), promise used reject function

const getPromise = (condition) =>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(condition){
                resolve({username:"Houssein",age:29});
            }else{
                reject("Something went wrong");
            }
        }, 1000);
    });

}

const promise = getPromise(false);

promise
    // resolve used -> fulfilled
    .then((data)=>{
        console.log(data)
    }) 
    // reject used -> rejected
    .catch((error)=>{
        console.log(error)
    })
    // executed anyway
    .finally(()=>{
        console.log("Promise ended")
    });