const { boatInventory } = require("./fishingBoat.js")


const inventory = boatInventory()
// console.log(inventory)

const buyFish = []

for (const fish of inventory) {
    if (fish.amount >= 10 && fish.price <= 7.50) {
        buyFish.push(fish)
    }

}

const menu = []
    
const mongerInventory = () => {
    for(const selection of buyFish) {
        if (selection.price <= 5 && selection.amount >= 10) {
           selection.amount = 10
           menu.push(selection)
        }
    }
        return menu
}                                                


module.exports = {mongerInventory}




// I need to create a function  
// I have to iterate through an array with said function, the boat array
// 
