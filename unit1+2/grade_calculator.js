// Write a function getLetterGrade(score) that takes a number 0–100 and returns the letter grade:
// ● 90+ → "A"
// ● 80–89 → "B"
// ● 70–79 → "C"
// ● 60–69 → "D"
// ● below 60 → "F"
// Then add a check at the top: if score is less than 0 or greater than 100, return "Invalid score" instead of
// calculating a grade.

function getLetterGrade(score) {
    if (score > 100) {
        return ("how")
    }
    if (score >= 90 && score < 101) {
        return ("A")
    }
    if (score >= 80 && score <= 89) {
        return ("B")
    }
    if (score >= 70 && score <= 79) {
        return ("C")
    }
    if (score >= 60 && score <= 69) {
        return ("D")
    }
    if (score >= 0 && score <= 60) {
        return ("F")
    }
    if (score < 0) {
        return ("thats just kinda sad")
    }
}
result = getLetterGrade(-12)
console.log (result)