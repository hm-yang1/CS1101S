// TASK 2

import { alpha_of, blue_of, compose_filter, copy_image, get_video_time,
    green_of, image_height, image_width, install_filter, keep_aspect_ratio,
    pause_at, red_of, reset_filter, set_dimensions, set_fps, set_loop_count,
    set_rgba, set_volume, start, use_image_url, use_local_file, use_video_url
} from "pix_n_flix";

const FPS = 30;

function array_to_stream(a) {
    const len = array_length(a);
    function helper(a, n) {
        return n > len - 1
            ? null
            : pair(a[n], () => helper(a, n + 1));
    }
    display('stream created');
    return helper(a, 0);
}

function stream_to_filter(s) {
    function filter(src, dest) {
        if (is_null(stream_tail(s))) {
            for (let y = 0; y < HEIGHT; y = y + 1) {
                dest[y] = head(s)[y];
            }
        } else {
            for (let y = 0; y < HEIGHT; y = y + 1) {
                dest[y] = head(s)[y];
            }
            s = stream_tail(s);
        }
    }
    return filter;
}


install_filter(stream_to_filter(array_to_stream(anomaly_data)));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();