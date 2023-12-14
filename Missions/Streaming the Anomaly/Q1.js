// TASK 1

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
    return helper(a, 0);
}


display(array_length(anomaly_data) ===
        stream_length(array_to_stream(anomaly_data)));
display(anomaly_data[7] ===
        stream_ref(array_to_stream(anomaly_data), 7));