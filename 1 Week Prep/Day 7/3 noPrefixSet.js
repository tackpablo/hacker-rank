/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-no-prefix-set/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-seven
/////////////////////////

// There is a given list of strings where each string contains only lowercase letters from a - j, inclusive. The set of strings is said to be a GOOD SET if no string is a prefix of another string. In this case, print GOOD SET. Otherwise, print BAD SET on the first line followed by the string being checked.

// Note If two strings are identical, they are prefixes of each other.

function noPrefix(words) {
    let prefixes = new Set(); // All potential prefixes of words we've looked at so far
    let wordsChecked = new Set(); // Words we've looked at so far

    for (const word of words) {
        // See if the word is a prefix of any of the words we've checked so far.
        if (prefixes.has(word)) {
            console.log("BAD SET");
            console.log(word);
            return;
        }

        // See if any version of the start of the word matches a word we've seen already
        for (let wordLength = 1; wordLength <= word.length; ++wordLength) {
            const prefixTarget = word.substr(0, wordLength);
            if (wordsChecked.has(prefixTarget)) {
                console.log("BAD SET");
                console.log(word);
                return;
            }

            // Store as a potential prefix match for word we'll look at next
            prefixes.add(prefixTarget);
        }
        // If we got this far, word becomes another prefix to try to match
        wordsChecked.add(word);
    } // End loop through word list.

    // If we got this far, we didn't find any prefixes
    console.log("GOOD SET");
}
