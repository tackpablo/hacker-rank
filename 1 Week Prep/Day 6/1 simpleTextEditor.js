/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-simple-text-editor/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-six
/////////////////////////

// Implement a simple text editor. The editor initially contains an empty string, S. Perform Q operations of the following 4 types:

// 1. append(W) - Append string W to the end of S.
// 2. delete(k) - Delete the last k characters of S.
// 3. print(k) - Print the kth character of S.
// 4. undo() - Undo the last (not previously undone) operation of type 1 or 2, reverting S to the state it was in prior to that operation.

function processData(input) {
    // split the input at every newline (new command)
    input = input.split("\n");
    let string = "";
    const undoList = [];

    // loop through the input
    for (let i = 1; i < input.length; i++) {
        // do undoable storage before each ops

        //1 append
        if (input[i][0] == 1) {
            undoList.push(string);
            const strParse = input[i].split(" ")[1];
            string += strParse;
        }

        //2 delete
        if (input[i][0] == 2) {
            let tada = input[i];
            const deleteIndex = Number(tada.split(" ")[1]);
            undoList.push(string);
            const len = string.length;
            string = string.slice(0, len - deleteIndex);
        }

        //3 print
        if (input[i][0] == 3) {
            let tada = input[i];
            const indexed = Number(tada.split(" ")[1]);
            console.log(string[indexed - 1]);
        }

        //undo
        if (input[i][0] == 4) {
            string = undoList.pop();
        }
    }
}
