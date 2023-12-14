// Task 5
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

const dot_duration = 0.125;
const dash_duration = 3 * dot_duration;

// Create dot, dash and pause sounds first.
const dot_sound = sine_sound(800, dot_duration);
const dash_sound = sine_sound(800, dash_duration);
const dot_pause = silence_sound(dot_duration);
const dash_pause = silence_sound(dash_duration);

// Create sounds for each letter.
const S_sound = consecutively(list(dot_sound, 
                                    dot_pause, 
                                    dot_sound, 
                                    dot_pause, 
                                    dot_sound));
const O_sound = consecutively(list(dash_sound, 
                                    dot_pause, 
                                    dash_sound, 
                                    dot_pause, 
                                    dash_sound));

// Build the signal out of letter sounds and pauses.
const distress_signal = consecutively(list(S_sound, 
                                            dash_pause,
                                            O_sound,
                                            dash_pause,
                                            S_sound));

// Play distress signal.
play(distress_signal);
// play(dot_sound);
// play(dash_sound);
// play(S_sound);
// play(O_sound);
