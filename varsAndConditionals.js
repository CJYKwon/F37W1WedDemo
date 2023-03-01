/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let obiwanAttack = 25
let anakinAttack = 35

if (obiwanAttack > anakinAttack) {
    console.log('Obiwan has a better attack than Anakin')
} else if (anakinAttack > obiwanAttack) {
    console.log('Anakin has a better attack than Obiwan')
} else {
    console.log ('Anakin and Obiwan have the same attack')
}

let obiwanHealth = 100
let obiwanDefense = 0

if (obiwanHealth > anakinAttack ) {
    //obiwanHealth = obiwanHealth - anakinAttack same as written below
    obiwanHealth -= anakinAttack
    console.log('Obiwans health is now ' + obiwanHealth)
} else {
    console.log(`obiwan was slain by Anakin, becoming even more powerful than he can imagine`)
}

obiwanDefense = 30

let coinFlip = `heads`

//if (coinFlip === 'heads') {
//    console.log('fight continues')
//} else {
//   console.log(`Anakin flees from Obiwan`)
//}

//if (coinFlip !== 'heads') {
//   console.log('Anakin flees from Obiwan')
//} else {
//   console.log(`fight continues`)
//}

//both will have same results, just switched the outcomes

for (let i = 0; i < 5; i++){
    if (obiwanHealth > anakinAttack - obiwanDefense) {
        obiwanHealth -= anakinAttack - obiwanDefense
        console.log('Obiwans health is now ' + obiwanHealth)
    } else {
        console.log(`obiwan was slain by Anakin, becoming even more powerful than he can imagine`)
    }
}

while(obiwanHealth > 0 ) {
    obiwanHealth -= anakinAttack - obiwanDefense
    console.log(`Obiwans health is now at ${obiwanHealth}`)
if (obiwanHealth <= 0) {
    console.log(`Obiwan is part of the living force now`)
}
}

