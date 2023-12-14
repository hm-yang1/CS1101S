// Task 4
function sine_sound(freq, duration) {
    return make_sound(t => math_sin(2 * math_PI * freq * t), duration);
}

function two_consecutively(s1, s2) {
    return make_sound( t => t < get_duration(s1)
                            ? get_wave(s1)(t)
                            : get_wave(s2)(t - get_duration(s1)),
                            get_duration(s1) + get_duration(s2));
}

function consecutively(list_of_sounds) {
    return is_null(tail(list_of_sounds))
    ? head(list_of_sounds)
    : two_consecutively(head(list_of_sounds), 
                        consecutively(tail(list_of_sounds)));
}

const my_sine_1 = sine_sound(500, 1);
const my_sine_2 = sine_sound(750, 1);
const my_sine_3 = sine_sound(625, 1);

// Play test sound.
play(consecutively(list(my_sine_1, my_sine_2, my_sine_3)));
