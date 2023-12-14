// Task 3

function sine_sound(freq, duration) {
    return make_sound(t => math_sin(2 * math_PI * freq * t), duration);
}

function two_consecutively(s1, s2) {
    return make_sound( t => t < get_duration(s1)
                            ? get_wave(s1)(t)
                            : get_wave(s2)(t - get_duration(s1)),
                            get_duration(s1) + get_duration(s2));
}

const my_sine_1 = sine_sound(500, 1);
const my_sine_2 = sine_sound(750, 2);

display(get_duration(my_sine_1) + get_duration(my_sine_2));
// Play test sound.
play(two_consecutively(my_sine_1, my_sine_2));
// play(two_consecutively(my_sine_2, my_sine_1));
// play(my_sine_1);
// play(my_sine_2);
