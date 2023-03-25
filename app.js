// function getAlienStats(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// function getAlienDecimalStats(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }
// console.log(getAlienStats(3,6))
// console.log(getAlienStats(2,4))
// console.log(getAlienDecimalStats(.6,.8))
//   class Hamster{
//     constructor  (name){
//       this.owner="";
//       this.name=name;
//       this.price=15;
//     }
// wheelRun(){
// console.log("squeak squeak")
// }
// eatFood(){
//   console.log("nibble nibble")

// }
// getPrice(){
// return this.price
// }
//}

class HeroShip {
    constructor() {
        this.name = "Uss Assembly"
        this.hull = 20
        this.hitPoints = 5
        this.accuracy = .7;

    }
}
   
   
let theHeroShip = new HeroShip



class AlienShip {
    constructor(name) {
        this.name = name;
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.hitPoints = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }
    
}

let allAlienShips = []
// for (counter = 0; counter <= 5; counter++){
//     allAlienShips.push(new AlienShip ())
// }

let alienShip1 = new AlienShip("Orcs are Us")
allAlienShips.push(alienShip1)
let alienShip2 = new AlienShip("The Zimvader")
allAlienShips.push(alienShip2)

let alienShip3 = new AlienShip("Arbitor Strong")
allAlienShips.push(alienShip3)
// let alienShip4 = new AlienShip("Cyborgy Express")
// allAlienShips.push(alienShip4)
// let alienShip5 = new AlienShip("Scalien Scaler")
// allAlienShips.push(alienShip5)
// let alienShip6 = new AlienShip("Supreme Beam")
// allAlienShips.push(alienShip6)
// console.log(allAlienShips)



let currentEnemy = allAlienShips[0];
let heroShipShoot = (currentEnemy) => {
    let aimChance = Math.random()
    if (aimChance < theHeroShip.accuracy) {
        currentEnemy.hull = currentEnemy.hull - theHeroShip.hitPoints;
        console.log(`Direct hit: The enemys current hull is ${currentEnemy.hull}`)
              if (currentEnemy.hull < 0){
                allAlienShips.shift() 
                console.log(currentEnemy)
                if (allAlienShips.length === 0){
                    console.log('you win')
                }      
            if (currentEnemy.hull >= 1){
                console.log(currentEnemy)
                 alienShipShoot(theHeroShip)
                  
            }
    
    } else{
        console.log(`You missed!`)
        alienShipShoot(theHeroShip)
   
    }
}}

let alienShipShoot = (currentAlienShip) => {
    console.log(`alien ship shoots`)
    let aimAccuracy = Math.random()
    if (aimAccuracy < currentAlienShip.accuracy) {
        console.log(`Direct hit on ${theHeroShip.name}`)
        theHeroShip.hull -= currentAlienShip.hitPoints;
        console.log(theHeroShip)
        if (currentAlienShip.hull < 0){
            allAlienShips.shift() 
            console.log(currentEnemy)
            if (currentAlienShip.hull < 0){
                heroShipShoot(allAlienShips[0])
            }
            if(theHeroShip.hull === 0){
                console.log("game over")
                 }
    } else{
        console.log(`${theHeroShip.name} missed you!`)
        heroShipShoot(allAlienShips[0])

    }
}
}
    
  
heroShipShoot(allAlienShips[0])
// let myHeroShip = document.createElement('div')
// myHeroShip.textContent = "uss Assembly"
// let nameDiv = document.querySelector('nameBox')
// nameDiv.appendChild(myHeroShip)
window.onload = function() { 
    alert("Welcome to: Save the World")
    
    alert("You get to shoot the first alien ship - If the ship survives, it attacks you - If you survive, you attack the ship again - If it survives, it attacks you again, Etc. - If you destroy the ship, you have the option to ATTACK the next ship or to RETREAT.")
    alert("You can retreat at any time, but that means the game is over. - The only way to win is to destroy all six aliens. If you are destroyed, Its GAME OVER.")
    alert("You are moving through space when an alien ship approaches")


    
    //PROMPT TO MAKE FIRST ATTACK
    let input = prompt("Would you like to ATTACK, or RETREAT?")
    if (input == "ATTACK"){
        alert("The uss Assembly Aims and FIRES")
        alienShipShoot(theHeroShip)
    }
    if (input !== "ATTACK"){
        alert("the fate of the Universe is in your hands! Are you really going to run away?")
        let retreatInput= prompt("Are you sure you want to RETREAT? Y or N")
        if(retreatInput == "Y" || "y"){
            alert("The Aliens have taken over our whole solar system! it GAME OVER!")
        }else{
            heroShipShoot(allAlienShips[0])
        }

    }
}

// function gamePlay(){
//  if(allAlienShips[0].hull > 0){
//     console.log(theHeroShip)
//     console.log(allAlienShips[0])
//     console.log(`${theHeroShip.name} VS. ${allAlienShips[0].name} FIGHT!`)
// theHeroShip.heroShipShoot(allAlienShips[0])
//     if(allAlienShips[0].hull<=0){
//         allAlienShips.shift
//     } else {
//         allAlienShips[0].alienShipShoot(theHeroShip)
//     }
    
// }}
// gamePlay()
// gamePlay()
// function gamePlay(){
//     while(theHeroShip.hull>0){
// for(let i=0; i < allAlienShips.length; i++){
//     theHeroShip.heroShipShoot()
//     if(allAlienShips[i].hull <= 0){
//         allAlienShips[i].alienShipShoot()
//    }else{
//     destroyedAlienShips.push(allAlienShips[i])
//     console.log(destroyedAlienShips)
//     break
//    }
//   }
//  }
// }
//  gamePlay()