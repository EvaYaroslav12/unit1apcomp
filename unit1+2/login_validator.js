// Write a function isValidPassword(password) that returns true only if ALL of these are true:
// ● length is at least 8 characters
// ● contains at least one number (check with /[0-9]/.test(password))
// ● is not exactly "password" (case-sensitive)
// Combine all three checks into a single if statement using &&.

function isValidPassword(password) {
    num = /\d/.test(password)
    dumb = (password.includes("password"))
    if (password.length >= 8 && num == true && dumb == false) {
        return ('ok')
    }
    else
        return ('no')
}

result = isValidPassword("abc123456")
console.log (result)