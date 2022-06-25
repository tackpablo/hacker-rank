/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-tower-breakers-1/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-three
/////////////////////////

// Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally.The rules of the game are as follows:

// Initially there are n towers.
// Each tower is of height m.
// The players move in alternating turns.
// In each turn, a player can choose a tower of height x and reduce its height to y, where 1 <= y < x and y evenly divides x.
// If the current player is unable to make a move, they lose the game.
// Given the values of n and m, determine which player will win. If the first player wins, return 1. Otherwise, return 2.

// language not available in JavaScript, using Python2

function towerBreakers(n, m) {
    // if n is divisible by 2, (even number of towers)
    if (n % 2 == 0) {
        // return 2 (player 2 wins) - player 2 will just copy player 1 and win
        return 2;
    }
    // if m equals 1 (unable to make a move)
    if (m == 1) {
        // return 2 (player 2 wins)
        return 2;
    } else {
        // otherwise return 1 (player 1 wins) - player 1 will always win by destroying a single tower to equal 1
        return 1;
    }
}
