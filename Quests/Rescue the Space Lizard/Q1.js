// TASK 1

function max_flies_to_eat(tile_flies) {
    const rows = array_length(tile_flies);
    const columns = array_length(tile_flies[0]);
    function best_way(row, col) {//Assume got pos on first row
        if (row < 0 || row > rows -1 || col < 0 || col > columns - 1) {
            return 0;
        } else {
            const current = tile_flies[row][col];
            let direct = current + best_way(row + 1, col);
            let left = current + best_way(row + 1, col - 1);
            let right = current + best_way(row + 1, col + 1);
            if (direct > left && direct > right) {
                return direct;
            } else if (left > right){
                return left;
            } else {
                return right;
            }
        }
    }
    let temp_best = 0;
    for (let i = 0; i < columns; i = i + 1) {//row 0 annoying with recursion
        if (best_way(0, i) > temp_best) {
            temp_best = best_way(0, i);
        }
    }
    return temp_best;
}

// TEST:
const tile_flies = [[3, 1, 7, 4, 2],
                    [2, 1, 3, 1, 1],
                    [1, 2, 2, 1, 8],
                    [2, 2, 1, 5, 3],
                    [2, 1, 4, 4, 4],
                    [5, 7, 2, 5, 1]];

max_flies_to_eat(tile_flies); // Expected result: 32