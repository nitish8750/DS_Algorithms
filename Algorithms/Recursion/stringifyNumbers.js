// Write a recursive function called stringifyNumbers which takes in an object and finds all of the 
// values which are numbers and converts them to strings.

function stringifyNumbers(obj){
    for(var key in obj){
        if(typeof obj[key] === "number"){
            obj[key] = JSON.stringify(obj[key]);
        } else if(typeof obj[key] === "object" && !Array.isArray(obj[key])){
            stringifyNumbers(obj[key]);
        }
    }
    return obj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));