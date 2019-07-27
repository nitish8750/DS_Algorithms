/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var array = [];
    for(var i=0; i<s.length; i++){
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            array.push(s[i]);
        } else if(s[i] === ")"){
            if(array.pop() !== "("){
                return false;
                break;
            }
        } else if(s[i] === "}" ){
            if(array.pop() !== "{"){
                return false;
                break;
            }
        } else if(s[i] === "]"){
             if(array.pop() !== "["){
                return false;
                break;
            }
        }
    }
    return array.length === 0;
};