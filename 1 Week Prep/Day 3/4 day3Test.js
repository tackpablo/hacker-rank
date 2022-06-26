/////////////////////////
// https://www.hackerrank.com/challenges/palindrome-index/problem
/////////////////////////

// Given a string of lowercase letters in the range ascii[a-z], determine the index of a character that can be removed to make the string a palindrome. There may be more than one solution, but any will do. If the word is already a palindrome or there is no solution, return -1. Otherwise, return the index of a character to remove.

function palindromeIndex(s, alreadyCalled = false) {
    const length = s.length;
    // loop through to the middle of the string
    for (let i = 0; i < ~~(length / 2); i++) {
        // if value of string at index does not equal string value at the same index from the end
        if (s[i] !== s[length - i - 1]) {
            // if already called is true, exit statement
            if (alreadyCalled) return;
            // if the string values between the next index and the same index from the end (is not a palindrome)
            if (palindromeIndex(s.substring(i + 1, length - i), true) === -1) {
                // return the index
                return i;
            }
            // return the for the character to be removed
            return length - i - 1;
        }
    }
    // otherwise there is no solution
    return -1;
}
