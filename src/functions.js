function addToCart(quantity,  productName = "elma"){
    console.log("septe eklendi : " + productName + " adet : "+ quantity)
}

// addToCart("elma")
addToCart(2)
// addToCart()
// addToCart(15    )

let sayHallo = ()=> {
    console.log("mehabalar")
}
sayHallo()

let sayHallo2 = function () {
    console.log("merabahalr 2")
}
sayHallo2()


function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("elma",5,14)
addToCart2("armut",6,5)


let product1 = {productName:"elma",unitPrice:10,quantity:5}
function addToCart3(product) {
    console.log("ürün : "+ product.productName)
    console.log("adet : "+ product.quantity)
    console.log("Fiyat : "+ product.unitPrice)
}

addToCart3(product1)

let product2 = {productName:"elma",unitPrice:10,quantity:5}
let  product3 = {productName:"elma",unitPrice:10,quantity:5}
product2 = product3
product2.productName="karpuz"
console.log(product3.productName)

function addToCart4(x) {// fonkisyona gelenden çok blok içindeki referanslar önemli
    console.log(products)
}

let products = [
    {productName:"elma",unitPrice:10,quantity:5},
    {productName:"ayva",unitPrice:10,quantity:5},
    {productName:"muz",unitPrice:10,quantity:5}
]
addToCart4(products)

function add(bisey,...numbers) {// rest // resi sona bırak çünkü başka parametren varsa restten sonra çalışmaz hata verir
    // console.log(numbers)
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        total = total + numbers[i]

    }
    console.log("toplam : "+total)    
    console.log(bisey)
}0

add(2,3)
add(22,34,12)
add(22,334,49,13)


let numbers = [10,20,30,40,50,60]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"iç anadolu", population:"30M"}, 
    {name:"marmara", population:"40M"}, 
    {name:"karadeniz", population:"200M"},
    [
        ["Ankara","konya"],
        ["istanbul","bursa"],
        ["sinop","trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName:"elma",unitPrice:10,quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)






