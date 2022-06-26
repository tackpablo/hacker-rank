/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-grid-challenge/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-four
/////////////////////////

// We define super digit of an integer x using the following rules:

// Given an integer, we need to find the super digit of the integer.

// If x has only 1 digit, then its super digit is x.
// Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
// For example, the super digit of 9875 will be calculated as:

// super_digit(9875)   	9+8+7+5 = 29
// super_digit(29) 	    2 + 9 = 11
// super_digit(11)		1 + 1 = 2
// super_digit(2)		= 2

function superDigit(n, k) {
    // if string length = 1, digit is only 1 digit so end recursion
    if (n.toString().length == 1) return n;
    else {
        //turn n into array of numbers
        var arr = n.toString().split("");
        // instead of concat string k times, just mutiply each number by k for the first recursion, then by 1
        return superDigit(
            arr.reduce((current, numtoAdd) => +current + +numtoAdd * k, 0),
            1
        );
    }
}
