/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-one
/////////////////////////

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function plusMinus(arr) {
    // sort array
    arr.sort((a, b) => a - b);

    // min is the first four values
    let min = arr.slice(0, arr.length - 1).reduce((a, b) => a + b);
    // max is the addition of array with the last value removed
    let max = arr.slice(1).reduce((a, b) => a + b);

    console.log(min, max);
}
