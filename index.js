const sudoku = [[3, 1, 6, 5, 0, 8, 4, 0, 0],
                [5, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 8, 7, 0, 0, 0, 0, 3, 1],
                [0, 0, 3, 0, 1, 0, 0, 8, 0],
                [9, 0, 0, 8, 6, 3, 0, 0, 5],
                [0, 5, 0, 0, 9, 0, 6, 0, 0],
                [1, 3, 0, 0, 0, 0, 2, 5, 0],
                [0, 0, 0, 0, 0, 0, 0, 7, 4],
                [0, 0, 5, 2, 0, 6, 3, 0, 0]];


function find_empty_location(arr, l) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (arr[i][j] == 0) {
                l[0] = i;
                l[1] = j;
                return true;
            }
        }
    }
    return false;
}

//find number already in row, if have return true
function used_in_row(arr, row, num) {
    for (var i = 0; i < 9; i++) {
        if (arr[row][i] == num) {
            return true;
        }
    }
    return false;
}
//find number already in cell, if have return true
function used_in_col(arr, col, num) {
    for (var i = 0; i < 9; i++) {
        if (arr[i][col] == num) {
            return true
        }
    }
    return false;
}
//find number already in box, if have return true
function used_in_box(arr, row, col, num) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (arr[i + row][j + col] == num) {
                return true;
            }
        }
    }
    return false;
}

function check_location_is_safe(arr, row, col, num) {
    return !used_in_row(arr, row, num) && !used_in_col(arr, col, num) && !used_in_box(arr, row - row % 3, col - col % 3, num);
}

function solve_sudoku(arr) {
    var l = [0, 0];
    if (!find_empty_location(arr, l)) {
        return true;
    }
    var row = l[0];
    var col = l[1];
    for (var num = 1; num < 10; num++) {
        if (check_location_is_safe(arr, row, col, num)) {
            arr[row][col] = num;
            if (solve_sudoku(arr)) {
                return true;
            }
            arr[row][col] = 0;
        }
    }

    return false;
}

solve_sudoku(sudoku);
console.log(sudoku);

