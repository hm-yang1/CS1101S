// Task 1

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

// Test
const my_list = list(1, 2, 3, 4, 5, 6);
partition(my_list, 4);