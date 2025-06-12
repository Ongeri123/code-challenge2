function calculateChaiIngredients(numberOfCups) {

    if(!numberOfCups){
        console.log('Input a number!')
        return;
    }
    // Recipe
    const water = 200; // ml
    const milk = 50; // ml
    const teaLeaves = 1; // tablespoon
    const sugar = 2; // teaspoon

    // Total ingredients per number of cups
    const totalWater = numberOfCups * water;
    const totalMilk = numberOfCups * milk;
    const totalLeaves = numberOfCups * teaLeaves;
    const totalSugar = numberOfCups * sugar;

    // console log the results
    console.log(`To make ${numberOfCups} cups of chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalLeaves} tablespoons`);
    console.log(`Sugar(Sukari):${totalSugar} teaspoons`);

    console.log(`Enjoy your Chai Bora!`);

}

// prompting for input
let numberOfCups = prompt('Karibu! How many cups of Chai Bora would you like to make?');

// change input to number
numberOfCups = parseInt(numberOfCups);

// calling the function
calculateChaiIngredients(numberOfCups);