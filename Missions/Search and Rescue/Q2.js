function find(bst, name) {
    return is_empty_tree(bst)
    ? false
    : name === entry(bst)
    ? true
    : name > entry(bst)
    ? find(right_branch(bst), name)
    : find(left_branch(bst), name);
}

// Test
display(find(cadet_names, "Yang Hanming"));
find(cadet_names, "Bob");