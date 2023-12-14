// Task 2

function partition(xs, p) {
    function take(xs, p, cmp){
        return is_null(xs)
        ? null
        : cmp(head(xs), p)
        ? pair(head(xs), take(tail(xs), p, cmp))
        : take(tail(xs), p, cmp);
    }
    const front = take(xs, p, (x, y) => x <= y);
    const back = take(xs, p, (x, y) => x > y);
    return pair(front, back);
}

function quicksort(xs) {
    if (is_null(xs) || is_null(tail(xs))){
        return xs;
    } else {
        const part = partition(tail(xs), head(xs));
        return append(append(quicksort(head(part)), list(head(xs))),
                        quicksort(tail(part)));
    }
}

// Test
const my_list = list(23, 12, 56, 92, -2, 0);
display_list(quicksort(my_list));
// partition(my_list, 12);