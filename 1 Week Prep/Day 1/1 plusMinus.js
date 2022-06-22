/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-one
/////////////////////////

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
    // if no array, return
    if (!arr) {
        return;
    }

    // initialize variables
    let sizeOf = arr.length;
    let pos = 0;
    let neg = 0;
    let zero = 0;

    // loop through the array
    arr.forEach((a) => {
        // if value is greater than 0, add to counter
        if (a > 0) {
            pos++;
            // if value is less than 0, add to counter
        } else if (a < 0) {
            neg++;
            // if value is equal to 0, add to counter
        } else {
            zero++;
        }
    });

    // return the ratio up to 6 decimal places
    [pos, neg, zero].forEach((e) => {
        console.log((e / sizeOf).toFixed(6));
    });
}
