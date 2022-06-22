/////////////////////////
// https://www.hackerrank.com/challenges/find-the-median/problem
/////////////////////////

// The median of a list of numbers is essentially its middle element after sorting. The same number of elements occur after it as before. Given a list of numbers with an odd number of elements, find the median?

function findMedian(arr) {
    // sort the array
    let sortedArr = arr.sort((a, b) => a - b);

    // find the middle index
    let medianIndex = Math.floor(sortedArr.length / 2);

    // median is the value at the median index of sorted array
    return sortedArr[medianIndex];
}
