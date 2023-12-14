// TASK 4

import { alpha_of, blue_of, compose_filter, copy_image, get_video_time,
    green_of, image_height, image_width, install_filter, keep_aspect_ratio,
    pause_at, red_of, reset_filter, set_dimensions, set_fps, set_loop_count,
    set_rgba, set_volume, start, use_image_url, use_local_file, use_video_url
} from "pix_n_flix";

const FPS = 10;

function array_to_stream(a) {
    const len = array_length(a);
    function helper(a, n) {
        return n > len - 1
            ? null
            : pair(a[n], () => helper(a, n + 1));
    }
    return helper(a, 0);
}

function stream_to_filter(s) {
    function filter(src, dest) {
        for (let y = 0; y < HEIGHT; y = y + 1) {
            dest[y] = head(s)[y];
        }
        s = stream_tail(s);
    }
    return filter;
}

function loop(s) {
    function helper(st) {
        return is_null(st)
            ? helper(s)
            : pair(head(st), () => helper(stream_tail(st)));
    }
    return helper(s);
}

function time_lapse(s, n) {
    function helper(st, pos) {
        return pos % n === 0
            ? pair(head(st), () => helper(stream_tail(st), pos + 1))
            : helper(stream_tail(st), pos + 1);
    }
    return helper(s, 0);
}



install_filter(
    stream_to_filter(
        time_lapse(loop(array_to_stream(anomaly_data)),
                   10)));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();