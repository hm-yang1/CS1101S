// TASK 3
function d_split_list(xs) {
    const len = length(xs);
    const middle = math_ceil(len / 2);
    let second = xs;
    for (let i = 0; i < middle; i = i + 1) {
        second = tail(second);
    }
    function get_first(lst, mid) {
        if (mid < 1) {
            return null;
        } else {
            set_tail(lst, get_first(tail(lst), mid - 1));
            return lst;
        }
    }
    const first = get_first(xs, middle);
    return pair(first, second);
}

function d_merge(xs, ys) {
    if (is_null(xs) && is_null(ys)) {
        return null;
    } else if (is_null(xs)) {
        return ys;
    } else if (is_null(ys)) {
        return xs;
    } else {
        if (head(xs) > head(ys)) {
            set_tail(ys, d_merge(xs, tail(ys)));
            return ys;
        } else {
            set_tail(xs, d_merge(tail(xs), ys));
            return xs;
        }
    }
}


function d_merge_sort(xs) {
    if (is_null(tail(xs))) {
        return xs;
    } else {
        const split = d_split_list(xs);
        const first = head(split);
        const second = tail(split);
        // display(first);
        // display(second);
        return d_merge(d_merge_sort(first), d_merge_sort(second));
    }
}

// TEST:
const my_list = list(7, 2, 4, 6, 9, 88, 1, 5, 8, 3, 6, 0, -3, 57);
d_merge_sort(my_list);