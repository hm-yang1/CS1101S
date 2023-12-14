// TASK 3

// dest[i][j][0] = src[i][j][0];
// dest[i][j][1] = src[i][j][1];
// dest[i][j][2] = src[i][j][2];
// dest[i][j][3] = src[i][j][3];

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function zoom(factor) {
    factor = math_round(factor); // Mess up if not integer
    function zoom_helper(src, dest) {
        const width = image_width();
        const height = image_height();
        const centre_x = width / 2;
        const centre_y = height / 2;
        const scaled_width = math_floor(width / factor);
        const scaled_height = math_floor(height / factor);
        const start_x = math_floor(centre_x - scaled_width / 2);
        const start_y = math_floor(centre_y - scaled_height / 2);
        const end_x = math_floor(centre_x + scaled_width / 2);
        const end_y = math_floor(centre_y + scaled_height / 2);

        for (let y = start_y; y < end_y; y = y + 1){
            for (let x = start_x; x < end_x; x = x + 1) {
                for(let i = (y - start_y) * factor;  i < (y - start_y) * factor + factor; i = i + 1) {
                    for (let j = (x - start_x) * factor; j < (x - start_x) * factor + factor; j = j + 1) {
                        dest[i][j] = src[y][x];
                    }
                }
            }
        }
    }
    return factor > 1
        ? zoom_helper
        : copy_image;
}

install_filter(zoom(2));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();