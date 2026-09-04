// Sample example
// for (let i = 1; i <= 10; i++) {
//     if(i == 4){
//         break;
//     }
//     console.log(i);
// }


// -----------------------------------------------------------------------------

const array = [10, 15, 18, 66, 14, 28, 13];

// Let's say in this example, we need to exit the loop in case the element of an array is divided by 33

for (let index = 0; index < array.length; index++) {
    if(array[index] % 33 === 0){
        break;
    }

    console.log(`Element is ${array[index]}`);    
}
