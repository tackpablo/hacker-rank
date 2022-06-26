/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-merge-two-sorted-linked-lists/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-five
/////////////////////////

// Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

function mergeLists(head1, head2) {
    // if no head1, return head2
    if (!head1) return head2;
    // if no head2, return head1
    if (!head2) return head1;

    // if data at head1 is less than data at head2
    if (head1.data < head2.data) {
        // return data to have head1 data and use recursion to check the next head1 data compared to head2 data
        return { data: head1.data, next: mergeLists(head1.next, head2) };
    } else {
        // otherwise return data to have head2 data and use recursion to check the head1 data to the second head2 data
        return { data: head2.data, next: mergeLists(head1, head2.next) };
    }
}
