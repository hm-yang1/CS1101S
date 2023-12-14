function s_generator(pt) {
    return t => t < 1/2
                ? make_point(math_cos(2 * math_PI * (2 * t * 3/4)) + 
                            x_of(pt), 
                            math_sin(2* math_PI * (2 * t * 3/4)) + 
                            1 + 
                            y_of(pt))
                : make_point(math_sin(2 * math_PI * ((2*t-1) * (3/4))) +
                            x_of(pt), 
                            math_cos(2* math_PI * ((2*t-1) * (3/4))) -
                            1 + 
                            y_of(pt)); // your answer here
}
// function three_quarters(pt) {
//     return t => make_point(math_sin(2 * math_PI * (t * 3/4)) + x_of(pt),
//                             math_cos(2 * math_PI * (t * (3/4)))+ y_of(pt)); //your answer here
// }

// Test
// draw_connected(200)(s_generator(make_point(0.5,0.3)));
draw_connected_full_view_proportional(200)(s_generator(make_point(1, 3)));
