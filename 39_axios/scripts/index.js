const url = "https://jsonplaceholder.typicode.com/posts";

const result = axios.get(url); //  axios.get(url) returns a promise -> result is a promise

result
    .then((result)=>{
        console.log(result.data);
    })
    .catch((error)=>{
        console.log(`Failed to fetch data from url`);
        console.warn(error);
    })
    .finally()