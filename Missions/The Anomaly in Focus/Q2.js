// TASK 2
function red_rectangle_stream(s) {
    function get_red(arr) {
        const height = array_length(arr);
        const width = array_length(arr[0]);
        let bot_i = 0;
        let bot_j = 0;
        for (let i = 0; i < height; i = i + 1) {
            for (let j = 0; j < width; j = j + 1) {
                if (head(s)[i][j][0] === 255 &&
                        head(s)[i][j][1] === 0 &&
                        head(s)[i][j][2] === 0) {
                    if (i > bot_i) {
                        bot_i = i;
                    }
                    if (j > bot_j) {
                        bot_j = j;
                    }
                }
            }
        }
        let top_i = bot_i;
        let top_j = bot_j;
        for (let i = bot_i; i > 0; i = i - 1) {
            for (let j = bot_j; j > 0; j = j - 1) {
                if (head(s)[i][j][0] === 255 &&
                        head(s)[i][j][1] === 0 &&
                        head(s)[i][j][2] === 0) {
                    if (i < top_i) {
                        top_i = i;
                    }
                    if (j < top_j) {
                        top_j = j;
                    }
                }
            }
        }
        return pair(pair(top_i, top_j), pair(bot_i, bot_j));
    }
    return stream_map(get_red, s);
}


function stream_combine(f, s1, s2) {
    return pair(f(head(s1), head(s2)), 
                    () => stream_combine(f, stream_tail(s1), stream_tail(s2)));
}


// Trim the given image using the given rectangle.
// Returns an image that includes all purely red
// pixels of the given image.

function trim(image, rectangle) {
    const trimmed = [];
    const i_min = head(head(rectangle));
    const j_min = tail(head(rectangle));
    const i_max = head(tail(rectangle));
    const j_max = tail(tail(rectangle));

    for (let i = i_min; i <= i_max; i = i + 1) {
        const new_i = i - i_min;
        trimmed[new_i] = [];
        for (let j = j_min; j <= j_max; j = j + 1) {
            const new_j = j - j_min;
            trimmed[new_i][new_j] = image[i][j];
        }
    }
    return trimmed;
}

// Example:

const focused_stream = stream_combine(
                           trim,
                           anomaly_stream,
                           red_rectangle_stream(anomaly_stream));
head(focused_stream);

// Should return a close-up of the anomaly, a 19x19 image of black,
// red and white pixels.