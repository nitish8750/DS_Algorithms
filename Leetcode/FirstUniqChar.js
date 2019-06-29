/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var obj = {};
     for(var i=0; i<s.length; i++){
         obj[s[i]] = obj[s[i]] ? ++obj[s[i]] : 1;
     }  
     
     for(var j=0; j<s.length; j++){
         if(obj[s[j]] === 1) return j;
     }
     return -1;
 };