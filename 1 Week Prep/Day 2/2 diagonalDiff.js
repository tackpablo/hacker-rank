/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-two
/////////////////////////

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below:

// 1 2 3
// 4 5 6
// 7 8 9

// | (1 + 5 + 9) (left to right diagonal) - (3 + 5 + 9) (right to left diagonal) |

function diagonalDifference(arr) {
    // initialize accumulator
    let leftToRightSum = 0;
    let rightToLeftSum = 0;

    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        // add to accumulator value of arr as it goes up => (0, 0), (1, 1), (2, 2)
        leftToRightSum += arr[i][i];
        // add to accumulator value of arr as it goes down => (0, 3), (1, 1) (3, 0)
        rightToLeftSum += arr[i][arr.length - 1 - i];
    }

    return Math.abs(leftToRightSum - rightToLeftSum);
}
