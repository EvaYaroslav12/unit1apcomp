
// ============================================================
// AP CSP – JavaScript Practice Problem 02: Functions
// ============================================================
//
// DIRECTIONS: Complete each TODO below. Run with:
//             node practice_02_functions.js
// ============================================================

// ----------------------------------------------------------
// PART A: Writing Your First Function
// ----------------------------------------------------------

// TODO 1: Define a function called `greetStudent` that takes
//         one PARAMETER: `name`
//         The function should print:  "Hello, <name>! Welcome to AP CSP."

// TODO 2: CALL your greetStudent function twice with two
//         different names and observe the output.

// ----------------------------------------------------------
// PART B: Functions That Return Values
// ----------------------------------------------------------

// TODO 3: Define a function called `addNumbers` that takes
//         TWO parameters: `a` and `b`
//         It should RETURN their sum (do NOT just print it).

// TODO 4: Store the RETURN VALUE of addNumbers(15, 27) in a
//         variable called `result`, then print `result`.

// TODO 5: Define a function called `isEven` that takes one
//         parameter `num` and RETURNS true if it's even,
//         false if it's odd.  (Hint: use the % operator)

// TODO 6: Test isEven with three different numbers and print
//         each result with a label.
//         Example output:  4 is even: true

// ----------------------------------------------------------
// PART C: Putting It Together
// ----------------------------------------------------------

// TODO 7: Define a function called `letterGrade` that:
//         - Takes one parameter: `score` (a number 0–100)
//         - RETURNS the letter grade as a string:
//             90–100  → "A"
//             80–89   → "B"
//             70–79   → "C"
//             60–69   → "D"
//             below 60 → "F"

// TODO 8: Call letterGrade() with at least FOUR different
//         scores and print each result.
//         Example output:  Score 85 → B

// ----------------------------------------------------------
// PART D: Scope Challenge
// ----------------------------------------------------------

// TODO 9: Predict what this code will print BEFORE running it.
//         Write your prediction as a comment, THEN run it.

// let message = "I am global";

// function scopeTest() {
//   let message = "I am local";
//   console.log("Inside function:", message);
// }

// scopeTest();
// console.log("Outside function:", message);

// MY PREDICTION:
//   Inside function:
//   Outside function:

console.log("\"hi\"")