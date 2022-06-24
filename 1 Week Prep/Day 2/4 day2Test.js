/////////////////////////
// https://www.hackerrank.com/test/4nahpm20m33/questions
/////////////////////////

// Sean invented a game involving a 2n x 2n matrix where each cell of the matrix contains an integer. He can reverse any of its rows or columns any number of times. The goal of the game is to maximize the sum of the elements in the n  x n submatrix located in the upper-left quadrant of the matrix.

// Given the initial configurations for q matrices, help Sean reverse the rows and columns of each matrix in the best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.
// Matrix 1            Matrix 2           Matrix 3           Matrix 4
// [112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]
// i  j 0  1  2  length-j
// 0 [112, 42, 83, 119]
// 1 [56, 125, 56, 49]
// 2 [15, 78, 101, 43]
// 3 [62, 98, 114, 108]

// reverse column 2 [114, 101, 56, 83]
// reverse row 0 [119, 114, 42, 112]

// results in
// [119, 114, 42, 112]
// [56, 125, 101, 49]
// [15, 78, 56, 43]
// [62, 98, 83, 108]
// upper left quadrant = 119 + 114 + 56 + 125 = 414

function flippingMatrix(matrix) {
    // m equals the matrix
    let m = matrix;
    // l equals the length of the matrix
    let l = matrix.length - 1; // 3
    // sm equals the middle of the matrix
    let sm = Math.floor(matrix.length / 2);
    // total accumulator equals 0
    let total = 0;
    // loop through matrix 1-2
    for (let i = 0; i < sm; i++) {
        // loop through the index 0-1 for each matrix
        for (let j = 0; j < sm; j++) {
            // to the total, add the total of the
            total += Math.max(
                m[i][j],
                m[l - i][j],
                m[i][l - j],
                m[l - i][l - j]
            );
        }
    }
    return total;
}
