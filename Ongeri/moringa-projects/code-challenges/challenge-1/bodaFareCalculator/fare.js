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