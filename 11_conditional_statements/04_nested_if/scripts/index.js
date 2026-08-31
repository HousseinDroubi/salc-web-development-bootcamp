const day = 7;

// if day is 1 -> Monday
// if day is 2 -> Tuesday
// if day is 3 -> Wednesday
// if day is 4 -> Thursday
// if day is 5 -> Friday
// if day is 6 -> Saturday
// if day is 7 -> Sunday

// What if the user is going to enter a number that's not between 1 and 7

// First solution

// if(day == 1){
//     console.log("Monday");
// }else if(day == 2){
//     console.log("Tuesday");
// }else if(day == 3){
//     console.log("Wednesday");
// }else if(day == 4){
//     console.log("Thursday");
// }else if(day == 5){
//     console.log("Friday");
// }else if(day == 6){
//     console.log("Saturday");
// }else if(day == 7){
//     console.log("Sunday");
// }else{
//     console.log("Wrong number, number must be between 1 and 7");
// }

// Second solution (using nested if)

// If and only if the number is between 1 and 7

if(day >= 1 && day <= 7){ // here I'm checking if the number is between 1 and 7

    if(day == 1){
       console.log("Monday");
    }else if(day == 2){
        console.log("Tuesday");
    }else if(day == 3){
        console.log("Wednesday");
    }else if(day == 4){
        console.log("Thursday");
    }else if(day == 5){
        console.log("Friday");
    }else if(day == 6){
        console.log("Saturday");
    }else{
        console.log("Sunday");
    }

}else{
    console.warn("Wrong number");
}