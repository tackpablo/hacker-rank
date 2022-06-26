/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-grid-challenge/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-four
/////////////////////////

// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

function gridChallenge(grid) {
    // loop through the grid row
    for (let row in grid) {
        // split each row in grid, sort and rejoin
        grid[row] = grid[row].split("").sort().join("");

        // skip rows that are not the first
        if (row == 0) continue;

        // loop through the column of the grid
        for (let col in grid[row]) {
            // if the value is less than the previous value in the column
            if (grid[row][col] < grid[row - 1][col]) {
                // it is not in alphabetical order
                return "NO";
            }
        }
    }

    // otherwise it is
    return "YES";
}
