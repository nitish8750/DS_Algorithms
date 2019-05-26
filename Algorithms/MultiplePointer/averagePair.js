// Write a function called averagePair. Given a sorted array of integers and target average, 
// determine if there is a pair of values in the array where the average of the pair equals the target 
// average. There may be more than one pair that matches the average target.

function averagePair(arr, num) {
    let i=0, j=arr.length;
    while(i < j){
        let average  = (arr[i] + arr[j]) / 2;
        if(num === average) return true;
        else if(num > average) i++;
        else j--;
    }

    return true;
}