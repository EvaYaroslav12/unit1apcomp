// Function to write:  countVowels(str)
// Write a function countVowels(str) that returns the number of vowels (a, e, i, o, u — lowercase only) in a string, using a for loop that checks each character one at a time.
// Loop through every index of the string
// Use an if statement to check whether that character is a vowel
// Access a character by index with str[i] or str.charAt(i)
// This combines a loop with a conditional. You can check one character against several vowels using ||: char === "a" || char === "e" || ...

function countVowels(str){
    let counter = 0
    const letterCount = (str.match(/[a-z]/gi) || []).length;
    for (let i = 1; i <= letterCount; i++){
        if ("aeiou".includes(str[i])){
            counter = counter + 1
        }
    }
    return (counter)
}

result = countVowels("hello")
console.log (result)