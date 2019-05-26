// Write a function called isSubsequence which takes in two strings and checks whether the 
// characters in the first string form a subsequence of the characters in the second string. In other 
// words, the function should check whether the characters in the first string appear somewhere in the 
// second string, wihtout their order changing.

function isSubsequence(subStr, longStr){
    let j=0;
    let i=0;
    if(subStr.length === 0) return true;
    while(j < subStr.length && i < longStr.length){
        if(longStr[i] === subStr[j]){
            j++;
            i++;
        } else {
            i++;
        }
    }
    if(j === subStr.length) return true;
    else return false;
}

console.log(isSubsequence('ardc', 'abracadabra'));