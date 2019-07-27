function getPseudonyms(A){
    var groupArr = [];
    var helperFunc = function(){
         var arr = [A[0]];
        for(var i=1; i<A.length; i++){
            if(isAnagram(A[0], A[i])){
                arr.push(A[i]);
                A.splice(i,1);
                i--;
            }
        }
        A.splice(0,1);
        return arr;
    }
    while(A.length > 0){
        groupArr.push(helperFunc(A));
    }
    return groupArr;
}

function isAnagram(s, t) {
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

console.log(getPseudonyms(['abc', 'car', 'rac', 'bac', 'acb', 'tar', 'rat', 'cab', 'bca', 'qwerty', 'ytrewq']));