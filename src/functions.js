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
}

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


function asalSayiBul(...numbers) {
    let kontrol = 0
    console.log("sayilar: "+numbers)
    for (let i = 0; i < numbers.length; i++) {
        for (let k = 2; k < numbers[i]; k++) {
            if (numbers[i] % k == 0)
            kontrol++;
            
        }   
        if (kontrol != 0) {
            console.log(numbers[i] + " sayısı asal sayi degildir!")
        }    
        else{
            console.log(numbers[i] + " sayısı asal sayidir")
        }
    }
}

asalSayiBul(3,5,8,4)

function arkadasSayiBul(sayi1,sayi2) {
    let toplam1 = 0, toplam2 = 0, i;

    for (i = 1; i < sayi1; i++)
    {
        if (sayi1 % i == 0)
        {
            toplam1 = toplam1 + i;
        }
    }
    for (i = 1; i < sayi2; i++)
    {
        if (sayi2 % i == 0)
        {
            toplam2 = toplam2 + i;
        }
    }
    if (sayi1 == toplam2 && sayi2 == toplam1)
    {
        console.log(sayi1+" ve "+ sayi2+" sayıları Arkadaş sayıdır")
    }
    else
    {
        console.log(sayi1+" ve "+ sayi2+" sayıları Arkadaş sayıdır degildir.")
    }
}

arkadasSayiBul(220,284)
arkadasSayiBul(223,284)

function mukemmelSayiBul() {
    let mukemmel_sayılar = []
    for (let i = 1; i < 1000; i ++) 
    { 
        let toplam = 0
        for (let j = 1; j < i; j++) {
            if (i % j == 0) 
            { 
              toplam = toplam + i; 
            } 
        }
        if (toplam == i) 
        { 
            mukemmel_sayılar.push(i + " sayısı Mükemmel Sayıdır"); 
        }  
    }
    console.log(mukemmel_sayılar)
}
mukemmelSayiBul()


function asalSayilar() {
    let asalOlanlar = []
    for (let i = 0; i < 1000; i++) {
        let kontrol = 0
        for (let k = 2; k < i; k++) {
            if (i % k == 0)
            kontrol++;
                
        }   
        if (kontrol != 0) {
            //console.log(i + " sayısı asal sayi degildir!")
        }    
        else{
            asalOlanlar.push(i + " sayısı asal sayidir")
        }
    }   
    console.log(asalOlanlar)
}

asalSayilar()
