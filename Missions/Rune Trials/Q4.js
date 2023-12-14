function mosaic(r1, r2, r3, r4) {
    return stack(beside(r4,r1),beside(r3,r2));// your answer from a previous question
}

function transform_mosaic(r1, r2, r3, r4, transform) {
    return transform(mosaic(r1,r2,r3,r4)); // your answer here
}

// Test
// show(make_cross(heart));
show(transform_mosaic(rcross, sail, corner, nova, make_cross));