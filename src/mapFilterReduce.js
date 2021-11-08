let cart = [
    {id:1, productName:"Phone", quantity:2, unitPrice:3500},
    {id:2, productName:"Kalem", quantity:10, unitPrice:3},
    {id:3, productName:"Mouse", quantity:3, unitPrice:50},
    {id:4, productName:"Klavye", quantity:3, unitPrice:50},
    {id:5, productName:"Tablet", quantity:1, unitPrice:2500},
    {id:6, productName:"Kitap", quantity:1, unitPrice:35},
]
console.log("<ul>");
cart.map(product=> {
    console.log("<li>" + product.productName+ ": " + product.unitPrice * product.quantity + "<li>")
})
console.log("</ul>");

let total = cart.reduce((acc, product)=> acc + product.unitPrice * product.quantity, 0) //acc = acumulator
console.log(total);

let quantityOver2 = cart.filter(product=> product.quantity > 2 | product.productName == "Kitap")
console.log(quantityOver2);

function addToCart(sepet) {
    sepet.push({id:7, productName:"MousePad", quantity:1, unitPrice:60})    
}
addToCart(cart)
console.log(cart)

let sayi = 10


function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)





