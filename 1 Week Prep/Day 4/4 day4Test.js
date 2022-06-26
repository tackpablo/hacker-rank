/////////////////////////
//
/////////////////////////

// Suppose there is a circle. There are N petrol pumps on that circle. Petrol pumps are numbered 0 to (N - 1) (both inclusive). You have two pieces of information corresponding to each of the petrol pump: (1) the amount of petrol that particular petrol pump will give, and (2) the distance from that petrol pump to the next petrol pump.

// Initially, you have a tank of infinite capacity carrying no petrol. You can start the tour at any of the petrol pumps. Calculate the first point from where the truck will be able to complete the circle. Consider that the truck will stop at each of the petrol pumps. The truck will move one kilometer for each litre of the petrol.

function truckTour(petrolpumps) {
    // define counter for petrol amount and distance to next pump
    let petrol = 0;
    let pump = 0;

    // loop through petrol pumps
    for (let i = 0; i < petrolpumps.length; i++) {
        // to petrol, add the petrol amount at index
        petrol += petrolpumps[i][0];
        // subtract the distance to next pump
        petrol -= petrolpumps[i][1];

        // if petrol is less than 0
        if (petrol < 0) {
            // petrol us equal to 0
            petrol = 0;
            // pump is the next one
            pump = i + 1;
        }
    }

    // return the pump location
    return pump;
}
