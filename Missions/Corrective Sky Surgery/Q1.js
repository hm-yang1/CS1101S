// TASK 1

// function my_first_filter(src, dest) {
//     const width = image_width();
//     const height = image_height();

//     for (let y = 0; y < height; y = y + 1) {
//         for (let x = 0; x < width; x = x + 1) {
//             dest[y][x][0] = 255 - src[y][x][0]; // invert red intensity
//             dest[y][x][1] = 255 - src[y][x][1]; // invert green intensity
//             dest[y][x][2] = 255 - src[y][x][2]; // invert blue intensity
//             dest[y][x][3] = 255;                // always 255
//         }
//     }
// }


const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function my_first_filter(src, dest) {
    const width = image_width();
    const height = image_height();
    if (width >=256 && height >= 256) {
        for (let y = 0; y < height; y = y + 1) {
            for (let x = 0; x < width; x = x + 1) {
                dest[y][x][0] = 255 * (y / height); // red intensity
                dest[y][x][1] = 255 * (x / width); // green intensity
                dest[y][x][2] = 255 - (255 * (y / width + x / height) / 2); // blue intensity
                dest[y][x][3] = 255; // always 255
            }
        }
    }
}

install_filter(my_first_filter);
set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();