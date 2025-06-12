# CODE CHALLENGE
 added html file to console log the js in the browser
<!-- TITLE 1 -->
# Challenge 1 : Chai Bora Ingredient Calculator


<!-- Description -->

This JavaScript function calculates the ingredients needed to make a specific number of cups of Kenyan chai based on a standard recipe.

# Standard Recipe for 1 Cup of Chai:
Water: 200 ml
Milk:50 ml
Tea Leaves (Majani): 1 tablespoon
Sugar (Sukari): 2 teaspoons (optional)

# Usage
The function prompts the user to enter the number of chai cups they wish to make, then calculates and prints the required amounts for each ingredient.

# code
function calculateChaiIngredients(numberOfCups) {
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

##### ######## ######### ########## separating the challenges



<!-- TITLE 2 -->
# Challenge 2: Boda Boda Ride Fare Estimator

<!-- Description -->
This challenge is to create a simple program to estimate the fare for a boda boda ride.

## Fare Calculation Rules:
Base Fare: KES 50 (applied to every ride).
Per Kilometer Charge: KES 15 per kilometer traveled.

## Usage
The function prompts the user to enter the trip distance (in kilometers), then calculates the total fare using the formula:

Total Fare = Base Fare + (Distance × Per Kilometer Charge)

# Code
function calculateBodaFare(distanceInKm){
    // fare rules
    const baseFare = 50; // in Ksh
    const perKmCharges = 15; // in Ksh per km

    //Total fare
    const totalChargePerKm = (distanceInKm * perKmCharges);
    const totalFare = baseFare + (distanceInKm * perKmCharges)

    // console log results

    console.log(` Uko kwote? Io ni ${distanceInKm} Km:`)
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${totalChargePerKm}`);
    console.log(`Total: KES ${totalFare}`);

    console.log(`Panda Pikipiki !`);
    console.log(`unaskiza ngoma gani?`)

    
}

//prompting for input
let distanceInKm = prompt(`Unafika wapi Mkubwa? Kilometer ngapi?`);

// change input to number.. Iused parsefloat for decimal values for the distance(googled)

distanceInKm = parseFloat(distanceInKm);

// call the function
calculateBodaFare(distanceInKm);


##### ###### ###### ######## #### separating the challenges


<!-- TITLE 3 -->

# Challenge 3: Simplified Mobile Money Transaction Fee Estimator

<!-- Description -->

This challenge is to create a simplified estimator for transaction fees.

## Fee Structure:
Standard Fee: 1.5% of the transaction amount.
Minimum Fee: KES 10 (if 1.5% of the amount is less than KES 10, the fee is KES 10).
Maximum Fee: KES 70 (if 1.5% of the amount is greater than KES 70, the fee is capped at KES 70).

## Usage
The function prompts the user to enter the transaction amount, calculates the fee, and displays the total amount debited.

# Code

// function name estimateTransactionFee
function estimateTransactionFee(amountToSend){
    if(!amountToSend){
        console.log('Failed To Convert');
        return;
    }

    //  //  fee strucutre
    let basicFee = (amountToSend *1.5 )/100;  //1.5% of the amount to send 
    let transactionFee = Math.min(Math.max(basicFee, 10), 70); // if basicfee is less than 10 transaction fee is 10 and if basicfee is more than 70 fee is 70 ,if basicfee is between 10 and 70 use basicfee
    // let amountToSend =( basicFee + transactionFee)

    // console log results
    console.log(`Sending KES ${amountToSend}`)
    console.log(`Calculated transaction fee is KES: ${transactionFee}`);
    console.log(`Total Amount to be debited: KES ${amountToSend + transactionFee}`);
}
    

    
    

// prompt the user
 amountToSend = prompt(`Unatuma Ngapi?`);

// convert input to number
amountToSend = parseInt(amountToSend);

// call the function
estimateTransactionFee(amountToSend);

##### ##### ########### 

# Author:
Developed by Newton, a tech enthusiast passionate about problem-solving through JavaScript.



