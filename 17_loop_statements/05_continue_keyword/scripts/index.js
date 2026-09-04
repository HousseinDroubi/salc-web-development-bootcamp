
// Sample example
// for (let i = 1; i <= 10; i++) {
//     if(i == 4){
//         continue;
//     }
//     console.log(i);
// }


// Note: the continue has no effect in the last line of for block
// for (let i = 1; i <= 10; i++) {
//     console.log(i); // 4
//     if(i == 4){
//         continue;
//     }
// }

// -----------------------------------------------------------------------------

// // How to know if a is divided by b ?
//     // When a % b === 0 -> a can be divided by b

// // Let's say here I want to only print the numbers that can be divided either by 3
// // for(let i = 1; i<=100; i++){
// //     if(i % 3 === 0){
// //         console.log(`Number is ${i}`);
// //     }
// // }

// Or you can do the following
for(let i = 1; i<=100; i++){
    if(!(i % 3 === 0)){
        continue;
    }

    console.log(`Number is ${i}`);

}