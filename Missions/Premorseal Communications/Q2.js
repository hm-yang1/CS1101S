// Task 2

function sine_sound(freq, duration) {
    return make_sound(t => math_sin(2 * math_PI * freq * t), duration);
}

// Play test sound.
play(sine_sound(500, 1));