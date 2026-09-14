const login = (condition) => {

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


const getResultFromPromise = async() => {
    try {
        const result = await login(true);
        console.log(result);
        location.href="home.html";

    } catch (error) {
        console.log(error);
    }finally{
        console.log("Promise ended");
    }
}

getResultFromPromise();