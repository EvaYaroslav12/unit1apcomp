// Function to write: fizzBuzz(num)
// Write a function fizzBuzz(num) that returns:
// ● "Fizz" if num is divisible by 3
// ● "Buzz" if num is divisible by 5
// ● "FizzBuzz" if num is divisible by both 3 and 5
// ● otherwise, return num converted to a string

function fizzbuzz(num){
    let check3 = num/3
    let check5 = num/5
    if (num == 0){
        return ('u suck', String(num))
    }
    if (Number.isInteger(check3) && !Number.isInteger(check5) && num != 0){
        return ('Fizz')
    }
    if (!Number.isInteger(check3) && Number.isInteger(check5) && num != 0){
        return ('Buzz')
    }
    if (Number.isInteger(check3) && Number.isInteger(check5) && num != 0){
        return ('FizzBuzz')
    }
    if (!Number.isInteger(check3) && !Number.isInteger(check5)){
        return (String(num))
    }
}
result = fizzbuzz(12)
console.log (result)