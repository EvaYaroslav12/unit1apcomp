// Function to write: getShippingCost(weight, isMember)
// Write a function getShippingCost(weight, isMember) that calculates shipping:
// ● If isMember is true: shipping is free if weight <= 5, otherwise $3 flat.
// ● If isMember is false:
// ● weight <= 1 → $5
// ● weight <= 5 → $8
// ● weight > 5 → $12
// This one needs a conditional inside a conditional (nested). Start with the outer check on isMember, then
// handle the weight tiers inside each branch.

function getShippingCost(weight, isMember) {
    if (isMember == true) {
        //console.log ('member = ture')
        if (weight <= 5){
            return ('shipping is free')
        }
        else 
            return ('shipping is 3$ pay up')
    }
    if (isMember == false){
        //console.log ('member false')
        if (weight <= 1){
            return ('shipping is 5$ pay up')
        }
        if (weight <= 5){
            return ('shipping is 8$ pay up')
        }
        if (weight > 5){
            return ('shipping is 12$ pay up')
        }
    }
}
result = getShippingCost(546, true)
console.log (result)