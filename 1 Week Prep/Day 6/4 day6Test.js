/////////////////////////
// https://www.hackerrank.com/challenges/bfsshortreach/problem#:~:text=For%20each%20query%2C%20you%20will,first%20search%20algorithm%20(BFS).
/////////////////////////

// Consider an undirected graph where each edge weighs 6 units. Each of the nodes is labeled consecutively from 1 to n.

// You will be given a number of queries. For each query, you will be given a list of edges describing an undirected graph. After you create a representation of the graph, you must determine and report the shortest distance to each of the other nodes from a given starting position using the breadth-first search algorithm (BFS). Return an array of distances from the start node in node number order. If a node is unreachable, return -1 for that node.

function bfs(n, m, edges, s) {
    let graph = {};
    // fill the graph with empty sets
    Array(n + 1)
        .fill(null)
        .forEach((v, i) => (graph[i] = new Set()));

    let result = [];

    // Construct graph double linked (undirected)
    for (let [n1, n2] of edges) {
        graph[n1].add(n2);
        graph[n2].add(n1);
    }

    // For node i = 1...n calculate distance from the start node to 'i'
    for (let i = 1; i <= n; i++) {
        if (i == s) continue; // skip start node in the result array

        let queue = [];
        // We use distances array also as visited array
        let distances = Array(n + 1)
            .fill(null)
            .map((_) => -1); // start distance as -1 for all
        distances[s] = 0; // starting node has distance of 0
        queue.push(s);

        // BFS LOOP ----------------------------
        while (queue.length > 0) {
            let node = queue.shift();
            for (let neighbor of graph[node]) {
                if (distances[neighbor] === -1) {
                    queue.push(neighbor);
                    // each distance is 6 more than the previous node
                    distances[neighbor] = distances[node] + 6;
                    if (neighbor === i) {
                        // if the target node i is reached
                        queue = []; // set the queue to empty to break the outer loop
                        break; // no need to continue inner loop either
                    }
                }
            }
        }
        result.push(distances[i] || -1);
    }
    return result;
}
