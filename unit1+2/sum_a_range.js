// Function to write:  sumRange(start, end)
// Write a function sumRange(start, end) that returns the sum of every integer from start to end, inclusive, using the accumulator pattern.
// Declare a total variable before the loop: let total = 0;
// Add to it each pass: total += i;
// This "start at zero, add every pass" shape is the accumulator pattern — you'll reuse it constantly

function sumRange(start,end){
    let total = 0;
    for (let i = start; i <= end; i++){
        total = total +i;
    }
    return total
}
result = sumRange(1, 12)
console.log (result)