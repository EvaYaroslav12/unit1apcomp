// Function to write:  multiplicationTable(n)
// Write a function multiplicationTable(n) that returns a string showing the multiplication table from 1 to n, one row per line (rows separated by "\n"). Each row shows n products separated by spaces.
// The outer loop picks the row number
// The inner loop builds that row, one product at a time
// Build each row as its own string, starting at "" before the inner loop runs
// This needs a loop inside a loop (nested loops). Add each finished row to your overall result before moving to the next row.
// console.log(multiplicationTable(3));
// // "1 2 3\n2 4 6\n3 6 9"

function multiplicationTable(n){
    let listy = ""
    for (let i = 1; i <= n; i++){
        for (let o = 1; o <= n; o++){
            nom = i*o
            listy+=nom + " "
        }
        listy +="\n"
    }
    console.log (listy)
}

multiplicationTable(5)