// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Winter Freeman" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
 console.log('Gingerbread + button was clicked!')
// selecting the element with an id of credit
document.getElementById('credit').textContent = `Created by ${yourName}`
// selecting the element with an id of add-gb
let gbPlusBtn = document.getElementById('add-gb')
gbPlusBtn.addEventListener('click', function() {
    gb++
    document.getElementById('qty-gb').textContent = gb;})

let gbMinusBtn = document.getElementById('minus-gb')
gbMinusBtn.addEventListener('click', function() {
    gb--
    document.getElementById('qty-gb').textContent = gb;
})
let ccPlusBtn = document.getElementById('add-cc')
ccPlusBtn.addEventListener('click', function() {
    cc++
    document.getElementById('qty-cc').textContent = cc;})

    let ccMinusBtn = document.getElementById('minus-cc')
ccMinusBtn.addEventListener('click', function() {
    cc--
    document.getElementById('qty-cc').textContent = cc;})
    
let sugarPlusBtn = document.getElementById('add-sugar')
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    document.getElementById('qty-sugar').textContent = sugar;})

    let sugarMinusBtn = document.getElementById('minus-sugar')
    sugarMinusBtn.addEventListener('click', function() {
        sugar--
        document.getElementById('qty-sugar').textContent = sugar;})
    