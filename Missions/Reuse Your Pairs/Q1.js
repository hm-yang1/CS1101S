// TASK 1
function d_split_list(xs) {
    const len = length(xs);
    const middle = math_ceil(len / 2);
    let second = xs;
    function get_first(lst, mid) {
        if (mid < 1) {
            second = lst;
            return null;
        } else {
            set_tail(lst, get_first(tail(lst), mid - 1));
            return lst;
        }
    }
    const first = get_first(xs, middle);
    return pair(first, second);
}

// TEST:
const my_list1 = list(1, 2, 3, 4, 5, 6);
const my_list2 = list(5, 4, 3, 2, 1);
d_split_list(my_list1);
display_list(d_split_list(my_list2));