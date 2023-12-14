import { scrabble_words } from "scrabble";
import { debug_log } from "unity_academy";
setup_wordle_game();

function filter_5_letter_words(arr) {
    const filtered_words = [];
    let index = 0;
    const len = array_length(arr);
    for (let i = 0; i < len; i = i + 1) {
        let word_len = string_length(arr[i]);
        if (word_len === 5) {
            filtered_words[index] = arr[i];
            index = index + 1;
        }
    }
    return filtered_words;
}

function get_random_word(arr) {
    const len = array_length(arr);
    return arr[random_integer(0, len)];
}

function binary_search(arr, target) {
    let low = 0;
    let high = array_length(arr) - 1;
    while (low <= high) {
        const mid = math_floor((low + high) / 2 );
        if (target === arr[mid]) {
            return mid;
        } else if (target < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

// Add any global variables / functions that you need to use here...
// const dummy = "dummy";
let answer = 0;
let index = 0;
let rows = 0;
const filtered = filter_5_letter_words(scrabble_words);

function wordle_start() {
    answer = get_random_word(filtered);
    index = 0;
    rows = 0;
    for (let y = 0; y < 6; y = y + 1) {
        for (let x = 0; x < 5; x = x + 1){
            set_cell_letter(y, x, LETTER_EMPTY);
            set_cell_background_color(y, x, COLOR_WHITE);
        }
    }
    debug_log(answer);
}

function check_row(row, i) {
    if (i === 4) {
        return get_cell_background_color(row, i) === COLOR_GREEN;
    } else {
        return (get_cell_background_color(row, i) === COLOR_GREEN && 
                    check_row(row, i + 1));
    }
}
function wordle_update() {
    // Delete the sample answer then write your answer here...
    const key = get_key_down_keycode();
    if (index > 4) {
        let string = '';
        for (let x = 0; x < 5; x = x + 1) {
            string = string + get_cell_letter(rows, x);
        }
        if (binary_search(filtered, string) === -1) {
            for (let x = 0; x < 5; x = x + 1) {
                set_cell_letter(rows, x, LETTER_EMPTY);
            }
            debug_log('invalid guess');
        } else {
            for (let x = 0; x < 5; x = x + 1) {
                const correct = char_at(answer, x);
                if (get_cell_letter(rows, x) === correct) {
                    set_cell_background_color(rows, x, COLOR_GREEN);
                }
            }
            for (let x = 0; x < 5; x = x + 1) {
                for (let i = 0; i < 5; i = i + 1) {
                    if (get_cell_letter(rows, x) === char_at(answer, i) && 
                        get_cell_background_color(rows, x) !== COLOR_GREEN) {
                        set_cell_background_color(rows, x, COLOR_YELLOW);
                    }
                }
            }
            for (let x = 0; x < 5; x = x + 1) {
                if (get_cell_background_color(rows, x) === COLOR_WHITE) {
                    set_cell_background_color(rows, x, COLOR_RED);
                }
            }
            if (check_row(rows, 0)){
                player_win(answer);
            }
            if (rows === 5) {
                if(check_row(rows, 0)) {
                    player_win(answer);
                } else {
                    player_lose(answer);
                }
            }
            debug_log(string);
            rows = rows + 1;
        }
        index = 0;
    }
    if (key !== null) {
        if (key === '0') {
            if (index < 1) {
                index = 0;
                set_cell_letter(rows, 0, LETTER_EMPTY);
            } else {
                index = index - 1;
                set_cell_letter(rows, index, LETTER_EMPTY);
            }
        } else {
            set_cell_letter(rows, index, key);
            index = index + 1;
        }
    }
}

set_wordle_start_function(wordle_start);
set_wordle_update_function(wordle_update);