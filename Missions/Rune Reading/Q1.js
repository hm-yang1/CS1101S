const multiple = 2;
function fractal(pic, n) {
    return n === 1
    ? pic
    : beside(pic,stackn(multiple,fractal(pic,n-1))); // your answer here
}

// Test
show(fractal(make_cross(rcross), 3));
show(fractal(make_cross(rcross), 5));
// show(stackn(3,heart));