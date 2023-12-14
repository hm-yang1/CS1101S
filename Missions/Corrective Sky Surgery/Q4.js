// TASK 4

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function flip_vertically(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
            for (let k = 0; k < 4; k = k + 1) {
                dest[i][j][k] = src[height - 1 - i][j][k];
            }
        }
    }
}

function color_invert(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1){
        for (let j = 0; j < width; j = j + 1){
            for (let c = 0; c < 4; c = c + 1) {
                dest[i][j][c] = c < 3 ? 255 - src[i][j][c] : src[i][j][c];
            }
        }
    }
}

function zoom(factor) {
    // your solution here
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
                        dest[i][j][0] = src[y][x][0];
                        dest[i][j][1] = src[y][x][1];
                        dest[i][j][2] = src[y][x][2];
                        dest[i][j][3] = src[y][x][3];
                    }
                }
            }
        }
    }
    return factor > 1
        ? zoom_helper
        : copy_image;
}
// Copy your solution for Task 3 (zoom) here.


function make_image(width, height) {
    const img = [];
    for (let i = 0; i < height; i = i + 1) {
        const row = [];
        img[i] = row;
        for (let j = 0; j < width; j = j + 1) {
            const pixel = [];
            row[j] = pixel;
            for (let z = 0; z < 4; z = z + 1) {
                pixel[z] = 255;
            }
        }
    }
    return img;
}

function stack(filter1, filter2) {
    const temp1 = make_image(WIDTH, HEIGHT);
    const temp2 = make_image(WIDTH, HEIGHT);

    return (src, dest) => {
        const width = image_width();
        const height = image_height();
        const half_height = math_floor(height / 2);

        filter1(src, temp1);
        filter2(src, temp2);

        for (let i = 0; i < half_height; i = i + 1) {
            dest[i] = temp1[i * 2];
            dest[i + half_height] = temp2[i * 2];
        }

        // take last row from temp2, if height is odd
        for (let i = half_height * 2; i < height; i = i + 1) {
            dest[i] = temp2[i];
        }
    };
}

function beside(filter1, filter2) {
    const temp1 = make_image(WIDTH, HEIGHT);
    const temp2 = make_image(WIDTH, HEIGHT);
    
    return (src, dest) => {
        const width = image_width();
        const height = image_height();
        const half_width = math_floor(width / 2);

        filter1(src, temp1);
        filter2(src, temp2);
        
        for (let i = 0; i < height; i = i + 1) {
            for (let j = 0; j < half_width; j = j + 1) {
                dest[i][j] = temp1[i][j * 2];
                dest[i][j + half_width] = temp2[i][j * 2];
            }
            for (let j = half_width * 2; j < width; j = j + 1) {
                dest[i][j] = temp2[i][j];
            }
        }
    };
}
// install_filter(beside(color_invert, color_invert));
install_filter(stack(beside(flip_vertically, color_invert),
                     beside(copy_image, zoom(2))));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();