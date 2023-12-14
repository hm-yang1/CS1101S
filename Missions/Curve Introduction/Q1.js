// Part 1
//It is a function that returns a make_point. (keep your answer commented)


// Part 2
function vertical_line(pt, length) {
    return t => make_point(x_of(pt), y_of(pt) + t*length);
}
// Part 3
// It is also a make_point. (keep your answer commented)


// Part 4
const point = make_point(0.5,0.25);
draw_connected(1000)(vertical_line(point,0.5));
// your answer here