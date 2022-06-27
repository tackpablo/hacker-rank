/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-balanced-brackets/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-five
/////////////////////////

// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

// Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

// By this logic, we say a sequence of brackets is balanced if the following conditions are met:

// It contains no unmatched brackets.
// The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
// Given n strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. Otherwise, return NO.

function isBalanced(s) {
    let result = [];
    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    for (let x in s) {
        // loops through index of input string
        if (s[x] in brackets) {
            // push values that are the key of brackets object
            // console.log("s[x]: ", s[x]);
            result.push(s[x]);
        } else {
            // all values that aren't keys
            let pop = result.pop(); // remove the key value from the above
            // console.log("pop: ", pop);
            // console.log("brackets[pop]: ", brackets[pop]);
            // console.log("s[x]: ", s[x])
            if (brackets[pop] !== s[x] || !pop) {
                // if the value of the brackets object does not equal the key to its corresponding key or pop (which is the key value)
                return "NO";
            }
        }
    }
    return result.length ? "NO" : "YES";
}
