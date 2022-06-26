/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-new-year-chaos/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-four
/////////////////////////

// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

function minimumBribes(q) {
    // define counter for number of bribes
    let num = 0;
    // initialize chaotic to be false to start
    let chaotic = false;
    // loop from the end of the line
    for (let i = q.length - 1; i >= 0; i--) {
        // if the value at index minus the index is greater than 3, chaotic is true
        if (q[i] - i > 3) chaotic = true;
        // loop from the value at index but two away
        for (let j = q[i] - 2; j < i; j++) {
            // if this value is greater than the value at the index, increase counter (i should be higher in value as it is higher in index)
            if (q[j] > q[i]) num++;
        }
    }

    if (chaotic) console.log("Too chaotic");
    else console.log(num);
}
