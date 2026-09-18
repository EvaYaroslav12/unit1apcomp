// Function to write:  countdown(n)
// Write a function countdown(n) that returns an array counting down from n to 1 (e.g., countdown(5) returns [5, 4, 3, 2, 1]). Use a while loop, not a for loop.
// You need a counter variable declared before the loop that decreases each pass
// Use counter-- or counter -= 1 inside the loop
// Double check your loop condition — a mistake here causes an infinite loop

// console.log(countdown(5)); // [5, 4, 3, 2, 1]

function countdown(n){
    let counter = n
    for (let i = 1; i <= n; i++){
        counter = counter -i
        console.log (counter)
    }
}
countdown(12)