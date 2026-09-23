// Problem 6: Primes Under a Limit
// Name:                                                                                
// Function to write:  primesUnder(limit)
// Write a function primesUnder(limit) that returns an array of every prime number less than limit. A prime number is greater than 1 and has no divisors other than 1 and itself.
// For every number below limit, test whether anything divides it evenly
// Loop from 2 up to (but not including) the candidate number, checking candidate % divisor === 0
// A boolean flag (let isPrime = true;) that flips to false when a divisor is found works well here
// This is the capstone: it combines a nested loop with a conditional to decide what to keep.
// console.log(primesUnder(10)); // [2, 3, 5, 7]

function primesUnder(limit){
    let listy = []
    let fixedlisty = []
    for (let i = 0; i <= limit; i++){
        for (let o = 0; o < i; o++){
            if (o != 1 && o != i && Number.isInteger(i/o)){
              listy.push(i)  
              break;
            }
        }
    }
    
    for (let a = 0; a <= limit; a++){
        if (!listy.includes(a)) {
            fixedlisty.push(a)
        }
    }
    // console.log (listy)
    // console.log (fixedlisty)
    return fixedlisty
}

result = primesUnder(12)
console.log (result)