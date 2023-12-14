// Task 4
function get_dtmf_frequencies(number) {
    const data = list(pair(1336, 941),
                        pair(1209, 697),
                        pair(1336, 697),
                        pair(1477, 697),
                        pair(1209, 770),
                        pair(1336, 770),
                        pair(1477, 770),
                        pair(1209, 852),
                        pair(1336, 852),
                        pair(1477, 852),
                        pair(1209, 941),
                        pair(1477, 941),
                        pair(1633, 697),
                        pair(1633, 770),
                        pair(1633, 852),
                        pair(1633, 941));
    return(list_ref(data, number));
}

function make_dtmf_tone(frequency_pair) {
    const tone = list(sine_sound(head(frequency_pair), 1 / 2), 
                        sine_sound(tail(frequency_pair), 1 / 2));
    return simultaneously(tone);
}

function dial(list_of_digits) {
    const delimiter = silence_sound(0.1);
    function dial_number(xs){
        return is_null(xs)
        ? null
        : pair(make_dtmf_tone(get_dtmf_frequencies(head(xs))), 
                pair(delimiter, dial_number(tail(xs))));
    }
    return consecutively(dial_number(list_of_digits));
}


function dial_all(list_of_numbers) {
    const end_sound = make_dtmf_tone(get_dtmf_frequencies(11)); //# sound
    const clean_numbers = filter(x => 
                                list_to_string(x) !== 
                                list_to_string(list(1,8,0,0,5,2,1,1,9,8,0)),
                                list_of_numbers);
    const list_of_dialed_sounds = map(dial, clean_numbers);
    function add_end_sound(xs){
        return is_null(xs)
        ? null
        : pair(head(xs), pair(end_sound, add_end_sound(tail(xs))));
    }
    return consecutively(add_end_sound(list_of_dialed_sounds));
}

// Test
// play(dial_all(
//       list(
//          list(1,8,0,0,5,2,1,1,9,8,0),  // not played!!!
//          list(6,2,3,5,8,5,7,7),
//          list(0,0,8,6,1,3,7,7,0,9,5,0,0,6,1))
//         ));
play(dial_all(
      list(list(1,8,0,0,5,2,1,1,9,8,0),
        list(7,7,7),
        list(4,5))));