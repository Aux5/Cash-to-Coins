const dollarAmount = 101.17
const piggyBank = {
    pennies: 0,
    nickels: 0,
    dimes: 0,
    quartars: 0
}
 let coinAmount = dollarAmount*100
//  while(coinAmount >= 25)
// {
//     piggyBank.quartars++
//     coinAmount = coinAmount - 25   
// } 
//  while(coinAmount >= 10) {
//     piggyBank.dimes++
//     coinAmount= coinAmount - 10
    
// }
//  while (coinAmount >= 5){
//     piggyBank.nickels++
//     coinAmount= coinAmount - 5
    
// }
//  while (coinAmount >= 1)
//    { piggyBank.pennies++
//     coinAmount = coinAmount - 1
    
// }

  

function numberOfCoins(coinName, coinValue){
    while(coinAmount >= coinValue){
        piggyBank[coinName]++
        coinAmount = coinAmount - coinValue
    }
}
numberOfCoins("quartars", 25)
numberOfCoins("dimes", 10)
numberOfCoins("nickels",5)
numberOfCoins("pennies",1)
console.log(piggyBank)    

//IT WORKSSSSSSSSSSSSSS