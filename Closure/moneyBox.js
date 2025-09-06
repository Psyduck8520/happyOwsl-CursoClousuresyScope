function  moneyBox3(coins){
    let savCoins   =  0
    savCoins  +=  coins ;
    console.log(`MoneBox: $ ${savCoins}`)
}

function moneyBox2(){
    let  saveCoins  = 0 ;
    function  countCoins(coins){
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}

const moneyBox = moneyBox2()
moneyBox(5)
moneyBox(5)
moneyBox(15)

const moneyBoxAna  = moneyBox2();
moneyBoxAna(10)
moneyBoxAna(20)
moneyBoxAna(5)


