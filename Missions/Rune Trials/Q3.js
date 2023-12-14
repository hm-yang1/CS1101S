function mosaic(r1, r2, r3, r4) {
    return stack(beside(r4,r1),beside(r3,r2));// your answer from the previous question
}

function upside_down(rune){
    return quarter_turn_right(quarter_turn_right(rune));
}
function upside_down_mosaic(r1, r2, r3, r4) {
    return upside_down(mosaic(r1,r2,r3,r4));// your answer here
}

// Test
show(upside_down_mosaic(rcross, sail, corner, nova));