/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-two
/////////////////////////

// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
    // sort the array
    let sorted = a.sort((a, b) => a - b);

    // initialize variable for unique value
    let unique;

    // loop through array
    for (let i = 0; i <= a.length; i++) {
        // if array at i does not equal the previous or next value
        if (sorted[i] !== sorted[i + 1] && sorted[i] !== sorted[i - 1]) {
            // save that value as unique
            unique = sorted[i];
            break;
        }
    }
    return unique;
}
