console.log("======================SORU_1=====================")
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

console.log("======================SORU_2=====================")
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
        console.log(sayi1+" ve "+ sayi2+" sayıları Arkadaş sayı degildir.")
    }
}

arkadasSayiBul(220,284)
arkadasSayiBul(223,284)

console.log("======================SORU_3=====================")
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

console.log("======================SORU_4=====================")
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
