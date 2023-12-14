// copy your fractal function here
function fractal(level, transformation, curve) {
    function compose(f, g){
        return x => f(g(x));
    }
    function repeat(f, n) { 
        return n === 0
            ? x => x
            : compose(f, repeat(f, n - 1));
    }
    return repeat(transformation, level)(curve); // your answer here
}

function invert(curve) {
    return t => curve(1 - t);
}

function dragonize(curve) {
    return put_in_standard_position(connect_ends
                    ((rotate_around_origin(0, 0, -math_PI / 2))(invert(curve)),
                    curve)); // your answer here
}

// Test
draw_connected_full_view_proportional(10000)
    (fractal(11, dragonize, unit_line));
    
draw_connected_full_view_proportional(10000)
    (connect_ends(unit_line, unit_circle));

draw_connected_full_view_proportional(10000)
    (connect_ends(invert(unit_line), unit_circle));
 
// draw_connected_full_view_proportional(10000)
//     (fractal(2, pixel_dragonize, unit_line));