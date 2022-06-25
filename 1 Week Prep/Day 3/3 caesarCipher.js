/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-caesar-cipher-1/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-three
/////////////////////////

// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

function caesarCipher(s, k) {
    // variable alphabet holds all letters
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // k is the divisibility of the alphabet
    k %= alphabet.length;

    // looped alphabet is the alphabet shifted by k
    const loopedAlphabet = alphabet.slice(k).concat(alphabet.slice(0, k));

    // variable that holds the encryption
    let encrypt = "";

    // looping through the string to encrypt
    // if the alphabet includes the string value at index
    for (let i in s)
        alphabet.includes(s[i])
            ? // to encrypt, add the looped alphabet value at the index where string value occurs
              (encrypt += loopedAlphabet[alphabet.indexOf(s[i])])
            : // or check for the same but lowercase
            alphabet.includes(s[i].toLowerCase())
            ? (encrypt +=
                  loopedAlphabet[
                      alphabet.indexOf(s[i].toLowerCase())
                  ].toUpperCase())
            : (encrypt += s[i]);
    return encrypt;
}
