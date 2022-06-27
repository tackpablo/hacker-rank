/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-queue-using-two-stacks/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-five
/////////////////////////

// A queue is an abstract data type that maintains the order in which elements were added to it, allowing the oldest elements to be removed from the front and new elements to be added to the rear. This is called a First-In-First-Out (FIFO) data structure because the first element added to the queue (i.e., the one that has been waiting the longest) is always the first one to be removed.

// A basic queue has the following operations:

// Enqueue: add a new element to the end of the queue.
// Dequeue: remove the element from the front of the queue and return it.
// In this challenge, you must first implement a queue using two stacks. Then process q queries, where each query is one of the following 3 types:

// 1 x: Enqueue element x into the end of the queue.
// 2 Dequeue the element at the front of the queue.
// 3 Print the element at the front of the queue.

function processData(input) {
    let lines = input.split("\n");
    let count = +lines[0];
    let queue = [];
    for (let i = 1; i <= count; i++) {
        let args = lines[i].split(" ");
        let cmd = +args[0];
        let arg;
        switch (cmd) {
            case 1:
                arg = args[1];
                queue.push(arg);
                break;
            case 2:
                queue.shift();
                break;
            case 3:
                console.log(queue[0]);
                break;
        }
    }
}
