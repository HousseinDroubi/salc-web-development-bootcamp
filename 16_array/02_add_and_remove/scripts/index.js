const array = [10, 30, 15, "Houssein", "Hady", null, [true, false]];

array.unshift(14, 15);
console.log(array); // [14, 15, 10, 30, 15, "Houssein", "Hady", null, [true, false]]
array.push("Mouhammad");
console.log(array); // [14, 15, 10, 30, 15, "Houssein", "Hady", null, [true, false], "Mouhammad"]

const removed_element_from_start = array.shift(); // removes the first element from array
console.warn(`The removed element from the start of the array is: ${removed_element_from_start}`);
console.log(array); // [15, 10, 30, 15, "Houssein", "Hady", null, [true, false], "Mouhammad"]

const removed_element_from_end = array.pop(); // removes the last element from array
console.warn(`The removed element from the end of the array is: ${removed_element_from_end}`);
console.log(array); // [15, 10, 30, 15, "Houssein", "Hady", null, [true, false]]
