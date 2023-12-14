// feel free to add helper functions!
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

function levycize(curve) {
    const f = math_sqrt(2) / 2;
    const scaled_curve = (scale(f, f, 1))(curve);
    return connect_rigidly(
        (rotate_around_origin(0, 0, math_PI / 4))(scaled_curve),
        (translate(0.5, 0.5, 0))
            ((rotate_around_origin(0, 0, -math_PI / 4))(scaled_curve)));
}

// Test
draw_connected_full_view_proportional(10000)
    (fractal(11, levycize, unit_line));

draw_connected_full_view_proportional(10000)
    (levycize(levycize(levycize(unit_line))));