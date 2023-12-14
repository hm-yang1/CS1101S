// TASK 1

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
head(red_rectangle_stream(anomaly_stream));
// should evaluate to: [[141, 191], [159, 209]]