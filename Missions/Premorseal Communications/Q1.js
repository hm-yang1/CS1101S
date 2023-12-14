// Task 1

function cut_sound(sound, duration) {
    return make_sound(get_wave(sound), duration);
}

// Play test sound.
play(cut_sound(noise_sound(2), 1));