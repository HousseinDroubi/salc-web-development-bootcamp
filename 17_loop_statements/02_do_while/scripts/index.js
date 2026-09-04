let i = 0;

do{
    console.log(`Number is ${i}`);
    i++;
}while(i<3);

console.log("----------------------------------");
// i here is 3

i = 0; // i now is 0 again!

const array=["a","b","c"];

do{
    console.log(`Letter is ${array[i]}`);
    i++;
}while(i<array.length);