// Function to write:  getNumbersInRange(start, end)
// Write a function getNumbersInRange(start, end) that returns an array of every integer from start to end, inclusive. 
// //Use a for loop and .push() to build the array one number at a time.
// Start an empty array before the loop: let result = [];
// Push into it on every pass through the loop
// Return result after the loop ends

// console.log(getNumbersInRange(1, 5)); // [1, 2, 3, 4, 5]

function getNumbersInRange(start, end){
    let listy = [];
    for (let i = start; i <= end; i++) {
        listy.push(i)
        //console.log(listy)
    }
    return listy
}
result = getNumbersInRange(12, 100)
console.log (result)
