const division = (n1,n2) => {
    
    if(n2 ==0) {
        throw new Error("n2 cannot be zero");
    }

    return n1 / n2;
}


let n1 = 10;
let n2 = 5;
let result;

try{
    result = division(n1,n2); // 2
    console.log(`result is ${result}`);

}catch(error){
    console.log(`${error}`)
}finally{
    console.log(`Finish try-catch`)
}

console.log(`---When n2 is zero---`);

n1 = 10;
n2 = 0

try{
    result = division(n1,n2);
    console.log(`result is ${result}`);

}catch(error){
    console.log(`${error}`)
}finally{
    console.log(`Finish try-catch`)
}
