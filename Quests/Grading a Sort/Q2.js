function graderVer1(arr) {
    function check_one(first, lst){
        return is_null(lst)
            ? 0
            : first > head(lst)
            ? 1 + check_one(first, tail(lst))
            : check_one(first, tail(lst));
    }
    if (is_null(tail(arr))){
        return 0;
    } else {
        return check_one(head(arr), tail(arr)) + graderVer1(tail(arr));
    }
}

graderVer1(list(0,0,0,0,0));

/*
check_one checks the first element against the rest of the elements of the
list and adds the out of order pairs. O(n) for list of size n, as goes 
through the entire list and compares. 

graderVer1 applies check_one to every element of arr, O(n^2) since it would
apply check_one n times for arr of size n.

Big theata(n^2), since no matter arrangement of list, still goes through
list one by one, best case and worst case the same order of growth. 
*/

// Test
// function take(xs, n) {
//     return n === 0 
//     ? null
//     : pair(head(xs), take(tail(xs), n-1));
// }

// function drop(xs, n) {
//     return n === 0
//     ? xs
//     : drop(tail(xs), n - 1);
// }

// function sum(xs){
//     return is_null(xs)
//     ? 0
//     : head(xs) + sum(tail(xs));
// }

// function graderVer1(arr){
//     const middle = math_round(length(arr) / 2);
//     if (is_null(tail(arr))){
//         return 0;
//     } else {
//         const front = take(arr, middle);
//         const back = drop(arr, middle);
//         return sum(front) >= sum(back)
//         ? length(back) + graderVer1(front) + graderVer1(back)
//         : graderVer1(front) + graderVer1(back);
//     }
// }