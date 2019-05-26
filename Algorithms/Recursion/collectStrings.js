// Write a function called collectStrings which accepts an object and returns an array of all the values 
// in the object that have a typeof string.

function collectStrings(obj){
    let result = [];
    let helperFunc = function(obj){
        for(let key in obj){
            let val = obj[key];
            if(typeof val === "object" && !Array.isArray(val)){
                helperFunc(val);
            } else if(typeof val === "string"){
                result.push(val);
            }
        }
    }
    helperFunc(obj);
    return result;
}
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj));