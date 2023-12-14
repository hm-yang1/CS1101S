function three_quarters(pt) {
    return t => make_point(math_cos(2 * math_PI * (t * 3/4)) + x_of(pt),
                            math_sin(2 * math_PI * (t * 3/4)) + y_of(pt)); //your answer here
}

// Test
draw_connected_full_view_proportional(200)(three_quarters(make_point(0.5, 0.25)));
draw_connected(200)(three_quarters(make_point(0.1, -0.2)));