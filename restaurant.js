const { mongerInventory } = require("./fishMonger.js")



const inventory = mongerInventory()
// console.log(inventory)

const boughtInventory = []
const finalMenu = ""

const fishMenu = () => {
    for (const fish of inventory) {
     fish.amount = fish.amount * .50 
    boughtInventory.push(fish)
    }

    for (const fishType of boughtInventory) {
    
        console.log(`<h1>Menu</h1><article class="menu"><h2> ${fishType.species} </h2><section class="menu_item"> ${fishType.species} Soup </section><section class="menu_item"> ${fishType.species} Sandwich </section><section class="menu_item">Grilled ${fishType.species}</section></article>`)
    

    }

    return finalMenu
    
}


module.exports = {fishMenu}








// then create 3 meals per fish
// maybe I can create objects, like, soup, sandwich, grilled
// and then push them to an array or wait, hang on, no yeah
// push that array of objects or just create an array or objects
// and then push that to an empty menu array -- okay, it's a start
// i feel like there could be some interpolation of fish names going on
// well shucks, lemme just whack at it 

// <h1>Menu</h1>
// {/* <article class="menu">
//     <h2>Tuna</h2>
//     <section class="menu__item">Tuna Soup</section>
//     <section class="menu__item">Tuna Sandwich</section>
//     <section class="menu__item">Grilled Tuna</section>
// </article> */}



// const meals = {
//     heading: "<h1>Menu</h1>",
//     subheading: "<article class=`menu`><h2>${fishType}</h2>",
//     soup: "<section class=`menu_item'> ${fishType} Soup </section>",
//     sandwich: "<section class=`menu_item`> ${fishType} Sandwich </section>",
//     grilled: "<section class=`menu_item`> ${fishType} Soup </section></article>"
// }
// dont do that


// just get the name from each fish, put it in that format
