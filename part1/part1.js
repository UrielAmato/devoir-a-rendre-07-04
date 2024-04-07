console.log('Hello world !')
/*
let cont= true
let cpt
for (cpt = 0; cpt < 6, cont== true; cpt++) {
    console.log('PLUS VITE')
    cpt++
}*/

//Exercice 1
let var1 = 6, var2 = 2

if ( Number.isInteger(var1/var2) ){
    console.log(var1/var2)
}else{
    console.log('undividable')
}

//Exercice 2
let charName = 'Lonk'
let charMoney = 800

let pomme = 50, LonLonMilk = 100, bomb = 200
let stockPomme = 5, stockLonLonMilk = 7, stockBomb = 1

canBuy(charName,charMoney,LonLonMilk, stockLonLonMilk)

function canBuy(charName, charMoney, item, stockItem){
    let nbBuyableItem = 0
    while (charMoney>=item && stockItem>0) {
        nbBuyableItem++
        charMoney -= item
        stockItem--
    }
    
    console.log(charName+' va pouvoir acheter '+nbBuyableItem+' unités de cet objet ')
    if (stockItem == 0) console.log("l'objet est en rupture de stock")
    console.log('Il lui reste '+charMoney+' rupees')
}

//Exercice 3

class Fighter{
    constructor( Nom, HP, atk, acc){
        this.Nom = Nom
        this.HP = HP
        this.atk = atk
        this.acc = acc
    }

    attaque(target) {
        if (this.precision()){
            target.HP -= this.atk
            console.log(target.Nom+' a subit '+this.atk+'. Il lui reste '+target.HP+'PV.')
        } else 
            console.log(this.Nom+' a raté son attaque')    
         
    }

    precision(){
        //console.log(this.acc)
        return (Math.random()<=this.acc)
    }
    
}

console.log()
let Lonk = new Fighter('Lonk',20,3,0.75)
let Gonandarf = new Fighter('Gonondarf',50,5,0.3)
//console.log(Lonk.atk)
Fight(Lonk,Gonandarf)

function Fight( fighter1 , fighter2 ){
    let cptRounds = 0;

    while (fighter1.HP > 0 || fighter2.HP > 0) {
        cptRounds++;
        console.log("ROUND " + cptRounds )
        fighter1.attaque(fighter2)
        fighter2.attaque(fighter1)
        console.log()
    }
    console.log("NOUS AVONS UN VAINQUEUR")
    if (fighter1.HP>=0){
        console.log(fighter1.Nom + ' Wins')
    }else{
        console.log(fighter2.Nom + ' Wins')
    }
    
}

