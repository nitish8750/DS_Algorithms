function RotateArray90(arr) {
    function rotateSubArr(i, j) {
        return [j, arr.length - i - 1];
    }
    var currentCol, currentRow;
    for(var i=0; i< Math.ceil(arr.length / 2); i++){
        for(var j=0; j<Math.floor(arr.length / 2); j++){
            var temp = [-1, -1, -1, -1];
            [currentRow, currentCol] = [i, j];
            for(var k=0; k<=3; k++){
                temp[k] = arr[currentRow][currentCol];
                [currentRow, currentCol] = rotateSubArr(currentRow, currentCol);
            }
            for(k=0; k<=3; k++){
                arr[currentRow][currentCol] = temp[(k+3)%4];
                [currentRow, currentCol] = rotateSubArr(currentRow, currentCol);
            }
        }
    }
    return arr;
}

console.log(RotateArray90([[1,2,3], [4,5,6], [7,8,9]]));
