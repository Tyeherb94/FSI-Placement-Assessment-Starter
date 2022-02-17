
let yourName = "Tyler Herbert" 
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let gbPlusBtn = document.querySelector('#add-gb')
let ccAddBtn = document.getElementById("add-cc")
let sugarAddBtn = document.getElementById("add-sugar")
let gbMinusBtn = document.getElementById("minus-gb")
let ccMinus = document.getElementById("minus-cc")
let sugarMinus = document.getElementById("minus-sugar")

let credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`

function updateQuantity(displayQuantity) {
    let quantity = document.getElementById("qty-total")
    quantity.innerHTML = cc+gb+sugar 
}

gbPlusBtn.addEventListener('click', function() {
gb = gb + 1
document.getElementById("qty-gb").innerHTML=gb
updateQuantity(' ${quantity}')
})

ccAddBtn.addEventListener('click', function(){
 cc = cc + 1
 document.getElementById("qty-cc").innerHTML=cc
 updateQuantity('${quantity}')
})

sugarAddBtn.addEventListener('click', function(){
 sugar = sugar + 1
 document.getElementById("qty-sugar").innerHTML=sugar
 updateQuantity('${quantity}')
})

gbMinusBtn.addEventListener('click', function(){
  if (gb > 0 ){
      gb--
  }
 document.getElementById("qty-gb").innerHTML=gb
 updateQuantity('${quantity}')
})

ccMinus.addEventListener('click', function(){
    if (cc > 0 ){
        cc--
    }
 document.getElementById("qty-cc").innerHTML=cc
 updateQuantity('${quantity}')
})

sugarMinus.addEventListener('click', function(){
    if (sugar > 0 ){
        sugar--
    }
 document.getElementById("qty-sugar").innerHTML=sugar
 updateQuantity('${quantity}')
})




