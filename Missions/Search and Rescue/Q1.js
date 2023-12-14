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

const h = make_tree("h", make_empty_tree(), make_empty_tree());
const a = make_tree("a", make_empty_tree(), make_empty_tree());
const n = make_tree("n", h, make_empty_tree());
const c = make_tree("c", a, make_empty_tree());
const test_bst = make_tree("e", c, n);


// Test
binary_search_tree_to_string(test_bst);
// binary_search_tree_to_string(cadet_names);
