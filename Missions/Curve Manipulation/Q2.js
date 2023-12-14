// s_generator from Mission "Curve Introduction" is predeclared
const s_curve = s_generator(make_point(0, 0));

function reflect_through_y_axis(curve) {
    return t => make_point(-x_of(curve(t)), y_of(curve(t))); // replace with your answer
}

const reflected_s_curve = reflect_through_y_axis(s_curve);

function close(curve) {
    return t => t < 1/2
    ? make_point(x_of(curve(2 * t)), y_of(curve(2 * t)))
    : make_point(x_of(curve(2 - 2 * t)), y_of(curve(2 - 2 * t))); // replace by your answer
}

function close1(curve){
    return t => make_point(x_of(1-t), y_of(1-t));
}
//Tests
draw_connected_full_view_proportional(200)
  (connect_ends(close(s_curve), reflected_s_curve));
   
draw_connected_full_view_proportional(200)(close1(s_curve));

display(x_of(close(s_curve)(1)));
display(x_of(close(s_curve)(0)));
