function kochize(curve) {
    const up_60 = rotate_around_origin(0, 0, math_PI / 3);
    const down_60 = rotate_around_origin(0, 0, - math_PI / 3);
    return put_in_standard_position(
               connect_ends(curve,
                            connect_ends(up_60(curve),
                                         connect_ends(down_60(curve),
                                                      curve))));
}

function fractal(level, transformation, curve) {
    function compose(f, g){
        return x => f(g(x));
    }
    function repeat(f, n) { 
        return n === 0
            ? x => x
            : compose(f, repeat(f, n - 1));
    }
    return repeat(transformation, level)(curve);
}

function snowflake(n) {
    const up_120 = rotate_around_origin(0, 0, 2*math_PI / 3);
    const down_120 = rotate_around_origin(0, 0, - 2*math_PI / 3); 
    const curve = fractal(n, kochize, unit_line);
    return connect_ends(down_120(curve),
                        connect_ends(up_120(curve), curve));
}

// Test
draw_connected_full_view_proportional(10000)(fractal(100, kochize, unit_line));
draw_connected_full_view_proportional(10000)(snowflake(5));
