// TASK 2

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

// TEST:
const my_list1 = list(2, 4, 5, 7, 9);
const my_list2 = list(3, 5, 8);
d_merge(my_list1, my_list2);