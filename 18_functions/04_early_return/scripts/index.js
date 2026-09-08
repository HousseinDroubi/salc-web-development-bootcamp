function division(number_1, number_2){

    // Do something to prevent the function to continue
    // if(number_2 == 0){
    //     console.log("2nd number cannot be zero");
    // }else{
    //     const result = number_1 / number_2;
    //     console.log(`Result is ${result}`);
    // }

    // Or you can do the following:
    if(number_2 == 0){
        console.log("2nd number cannot be zero");
        return;
    }

    const result = number_1 / number_2;
    console.log(`Result is ${result}`);
}

division(5,2); // Result is 2.5
division(9,3); // Result is 3
division(0, 5); // Result is 0
division(5,0); // 2nd number cannot be zero