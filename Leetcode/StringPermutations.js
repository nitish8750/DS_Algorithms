function permutations(str){
    var arr = [];
    var n = str.length;
    var helpFunc = function(str, start, end){
        if(start === end){
            arr.push(str);
        } else {
            for(var i=start; i<= end; i++){
                str = swap(str, start, i);
                helpFunc(str, start+1, end);
                str = swap(str, start, i);
            }
        }
    }
    helpFunc(str, 0, n - 1);
    return arr;
}

function swap(str, i, j){
    var arr = str.split('');
    var temp  = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr.join('');;
}