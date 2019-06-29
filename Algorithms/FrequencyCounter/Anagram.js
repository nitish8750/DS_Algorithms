// Given two strings, write a function to determine if the second string ian anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another. Example: cinema 
// and iceman, anagram and nagaram, textwisttime and timetwisttext

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var obj1 = {};
    var obj2 = {};
    for(var i=0; i<s.length; i++){
        obj1[s[i]] = obj1[s[i]] ? ++obj1[s[i]] : 1;
    }
    for(var j=0; j<t.length; j++){
        obj2[t[j]] = obj2[t[j]] ? ++obj2[t[j]] : 1;
    }
    
    if((Object.keys(obj1)).length !== (Object.keys(obj2)).length) return false;
    for(var key in obj1){
        if(obj1[key] !== obj2[key]) return false;
    }
    return true;
};


console.log(anagram('eerrttyy', 'yyttrree'))