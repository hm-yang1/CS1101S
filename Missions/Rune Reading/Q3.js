function hook(frac) {
    return quarter_turn_right(beside(square,stack_frac(frac,square,blank))); // your answer here
}
// copy your hook function from Question 2 here if required

function spiral(thickness, depth) {
    return depth===0
    ? blank
    : stack_frac(thickness, 
                hook(thickness/2), 
                (quarter_turn_right(spiral(thickness,depth-1))));
}

// Test
show(spiral(1/5,1));
show(spiral(1 / 5, 30));
show(spiral(0,20));
//stack_frac if thickness = 0, blank takes up entire rune, return white rune
show(spiral(1/5,0));
//hard coded this case, dunno how to return white rune if depth = 0
