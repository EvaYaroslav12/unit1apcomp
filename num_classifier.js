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
        console.log ("zero");
    }
    if (Number.isInteger(check) && num>0) {
        console.log ('positive even');
    }
    if (Number.isInteger(check) && num < 0) {
        console.log('negative even');
    }
    if (!Number.isInteger(check) && num > 0) {
        console.log('positive odd');
    }
    if (!Number.isInteger(check) && num < 0) {
        console.log('negative odd');
    }
}
num_classifier(0)

