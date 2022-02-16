// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Tyler Herbert" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle





// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
gb = gb + 1
console.log(gb)
console.log('Gingerbread + button was clicked!')
document.getElementById("qty-gb").innerHTML=gb

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
let ccAdd = document.getElementById("add-cc")
ccAdd.addEventListener("click", function(){
 cc = cc + 1
 console.log(cc)
 console.log('Chocolatechip + button was clicked!')
 document.getElementById("qty-cc").innerHTML=cc
})

let sugarAdd = document.getElementById("add-sugar")
sugarAdd.addEventListener("click", function(){
 sugar = sugar + 1
 console.log(sugar)
 console.log('sugar cookie + button was clicked!')
 document.getElementById("qty-sugar").innerHTML=sugar

})

let gbMinus = document.getElementById("minus-gb")
gbMinus.addEventListener("click", function(){
 sugar = gb - 1
 console.log(gb)
 console.log('Ginger Bread - button was clicked!')
 document.getElementById("qty-gb").innerHTML=gb

})
let ccMinus = document.getElementById("minus-cc")
ccMinus.addEventListener("click", function(){
 cc = cc - 1
 console.log(cc)
 console.log('Chocolate chip - button was clicked!')


})
let sugarMinus = document.getElementById("minus-sugar")
sugarAdd.addEventListener("click", function(){
 sugar = sugar - 1
 console.log(sugar)
 console.log('sugar cookie - button was clicked!')

})



