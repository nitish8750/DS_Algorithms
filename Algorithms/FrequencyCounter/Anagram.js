// Given two strings, write a function to determine if the second string ian anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another. Example: cinema 
// and iceman, anagram and nagaram, textwisttime and timetwisttext

function anagram(str1, str2){
    if(str1.length !== str2.length) return false;

    let strObj1 = {};
    let strObj2 = {};

    for(let val of str1)
        strObj1[val] = (strObj1[val] || 0) + 1;

    for(let val of str2)
        strObj2[val] = (strObj2[val] || 0) + 1;

    for(let key in strObj1){
        if(!(key in strObj2)) return false;

        if(strObj1[key] !== strObj2[key]) return false;
    }

    return true;
}

console.log(anagram('eerrttyy', 'yyttrree'))