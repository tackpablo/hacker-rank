/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-zig-zag-sequence/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-three
/////////////////////////

// Given an array of n distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first k elements in the sequence are in increasing order and the last k elements are in decreasing order, where k = (n + 1)/2. You need to find the lexicographically smallest zig zag sequence of the given array.

// language not available in JavaScript, using Python2

// def findZigZagSequence(a, n):
//     a.sort()
//     mid = int((n + 1)/2) - 1
//     a[mid], a[n-1] = a[n-1], a[mid]

//     st = mid + 1
//     ed = n - 2
//     while(st <= ed):
//         a[st], a[ed] = a[ed], a[st]
//         st = st + 1
//         ed = ed - 1

//     for i in range (n):
//         if i == n-1:
//             print(a[i])
//         else:
//             print(a[i], end = ' ')
//     return
