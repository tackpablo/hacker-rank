/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-lego-blocks/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-six
/////////////////////////

// You have an infinite number of 4 types of lego blocks of sizes given as (depth x height x width):

// d     h     w
// 1     1     1
// 1     1     2
// 1     1     3
// 1     1     4

// Using these blocks, you want to make a wall of height  and width . Features of the wall are:

// - The wall should not have any holes in it.
// - The wall you build should be one solid structure, so there should not be a straight vertical break across all rows of bricks.
// - The bricks must be laid horizontally.

// How many ways can the wall be built?

function legoBlocks(n, m) {
    var mod = BigInt(Math.pow(10, 9) + 7);
    var oneFloor = [];
    var dirtyMultiFloor = [];
    var cleanMultiFloor = [];

    oneFloor = [0n, 1n, 2n, 4n, 8n];

    for (let width = 1; width <= m; width++) {
        if (width > 4) {
            oneFloor[width] =
                (oneFloor[width - 1] +
                    oneFloor[width - 2] +
                    oneFloor[width - 3] +
                    oneFloor[width - 4]) %
                mod;
        }

        dirtyMultiFloor[width] = 1n;
        for (let k = 0; k < n; k++) {
            dirtyMultiFloor[width] *= oneFloor[width];
            dirtyMultiFloor[width] %= mod;
        }
    }

    for (let width = 1; width <= m; width++) {
        cleanMultiFloor[width] = dirtyMultiFloor[width] + mod;
        for (let k = 1; k < width; k++) {
            cleanMultiFloor[width] -=
                (cleanMultiFloor[k] * dirtyMultiFloor[width - k]) % mod;
            cleanMultiFloor[width] += mod;
        }
    }

    return cleanMultiFloor[m] % mod;
}
