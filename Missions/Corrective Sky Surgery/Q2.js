// TASK 2

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function copy(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
           dest[i][j][0] = src[i][j][0];
           dest[i][j][1] = src[i][j][1];
           dest[i][j][2] = src[i][j][2];
           dest[i][j][3] = src[i][j][3];
        }
    }
}

function crosshair(src, dest) {
    const width = image_width();
    const height = image_height();
    const centre_x = width / 2;
    const centre_y = height / 2;
    copy_image(src, dest);
    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
            // dest[i][j][0] = src[i][j][0];
            // dest[i][j][1] = src[i][j][1];
            // dest[i][j][2] = src[i][j][2];
            // dest[i][j][3] = src[i][j][3];
            if(j === width / 2){
                dest[i][j][0] = 255;
            }//red vertical
            if(i === height / 2){
                dest[i][j][0] = 255;
            }// red horizontal
            let x_coor = math_abs(j - centre_x);
            let y_coor = math_abs(i - centre_y);
            let area = x_coor * x_coor + y_coor * y_coor;
            for (let min_r = 25; min_r < width / 2 + 50; min_r = min_r + 50){
                let max_r = min_r + 25;
                let area_min = min_r * min_r;
                let area_max = max_r * max_r;
                if (area > area_min && area < area_max) {
                    dest[i][j][2] = 255;
                }
            }//Check if area in circle. area = kr^2
        }
    }
}

// install_filter(copy);
install_filter(crosshair);  // use this filter when crosshair function is ready.
set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();