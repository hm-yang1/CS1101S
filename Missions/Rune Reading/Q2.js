function hook(frac) {
    return quarter_turn_right(beside(square,stack_frac(frac,square,blank))); // your answer here
}

// Test
show(hook(1/2));
show(hook(1));
show(hook(0));
show(hook(1/5));
// show(beside(square,blank));
