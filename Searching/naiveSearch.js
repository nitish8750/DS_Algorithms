function naiveSearch(longStr, shortStr){
    let count = 0, j=0;
    for(let i=0; i<longStr.length; i++){
        for(j=0; j<shortStr.length; j++){
            if(shortStr[j] === longStr[i]){
                i++;
            } else {
                break;
            }
        }
        if(j === shortStr.length)
        count++;
    }
    return count;
}

console.log(naiveSearch("qwertydfrnnmqwertymfnfmkqwertyncmfvmqwertynfjf", "qwerty"));