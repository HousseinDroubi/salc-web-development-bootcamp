console.log("Start");

const task1 = () => {
    setTimeout(() => {
        console.log("Task 1 - Done (after 2 seconds)");
    }, 2000); // Asynchronous with setTimeout
}

const task2 = () => {
    console.log("Task 2 - Done");
}

task1(); // This runs asynchronously, and doesn't block task2
task2(); // This runs task2 and doesn't wait task1 to be finished

console.log("End");

// Start
// Task 2 - Done
// End
// Task 1 - Done (after 2 seconds)