/////////////////////////
// https://www.hackerrank.com/challenges/pairs/problem
/////////////////////////

// Given an array of integers and a target value, determine the number of pairs of array elements that have a difference equal to the target value.

function pairs(k, arr) {
    // define counter
    let count = 0;
    // sort the array
    arr.sort((a, b) => {
        return a - b;
    });

    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        // loop through the array but one index ahead
        for (let j = i + 1; j < arr.length; j++) {
            // if the difference equals k, increase count
            if (arr[j] - arr[i] === k) count++;
        }
    }
    return count;
}
