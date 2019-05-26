function getDigit(num, index){
    return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

function countDigit(num){
    return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(nums){
    let maxCountDigit = 0;
    for(let i=0; i<nums.length; i++){
        maxCountDigit = Math.max(maxCountDigit, countDigit(nums[i]));
    }
    return maxCountDigit;
}

function radixSort(arr){
    let maxDigitCount = mostDigits(arr);
    for(let k=0; k<maxDigitCount; k++){
        let bucketArr = Array.from({length: 10}, () => []);
        for(let i=0; i < arr.length; i++){
            bucketArr[getDigit(arr[i])].push(arr[i]);
        }
        arr = [].concat(...bucketArr);
    }
    return arr;
}