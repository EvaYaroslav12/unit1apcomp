//Function to write: classifyNumber(num)
//Write a function classifyNumber(num) that returns a string describing the number:
//● "zero" if it is 0
//● "positive even" if it is positive and even
//● "positive odd" if it is positive and odd
//● "negative even" if it is negative and even
//● "negative odd" if it is negative and odd

function num_classifier (num) {
    let check = num/2
    if (num == 0) {
        return ("zero");
    }
    if (Number.isInteger(check) && num>0) {
        return ('positive even');
    }
    if (Number.isInteger(check) && num < 0) {
        return ('negative even');
    }
    if (!Number.isInteger(check) && num > 0) {
        return ('positive odd');
    }
    if (!Number.isInteger(check) && num < 0) {
        return ('negative odd');
    }
}
result = num_classifier(12)
console.log (result)

