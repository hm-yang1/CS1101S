function insert(bst, item) {
    return is_empty_tree(bst)
    ? make_tree(item, make_empty_tree(), make_empty_tree())
    : item > entry(bst)
    ? make_tree(entry(bst), left_branch(bst), insert(right_branch(bst), item))
    : make_tree(entry(bst), insert(left_branch(bst), item), right_branch(bst));
}


function binary_search_tree_to_string(bst) {
    const semi_colon = "; ";
    if (is_empty_tree(bst)){
        return "";
    } else {
        return binary_search_tree_to_string(left_branch(bst)) + 
                entry(bst) +
                semi_colon +
                binary_search_tree_to_string(right_branch(bst));
    }
}

// Test

binary_search_tree_to_string(insert(make_empty_tree(), "x"));
// Should produce "x; "

const bst = accumulate((item, bst) => insert(bst, item),
                      make_empty_tree(),
                      list("g", "a", "r", "x", "p"));
binary_search_tree_to_string(bst);
// Should produce "a; g; p; r; x; "

const cadet_names_with_aaaaron =  insert(cadet_names, "AAAARON NORAAAA");
binary_search_tree_to_string(cadet_names_with_aaaaron);
// Should produce "AAAARON NORAAAA; ..."
