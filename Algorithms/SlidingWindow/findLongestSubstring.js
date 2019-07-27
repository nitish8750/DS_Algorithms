// Write a function called findLongestSubstring, which accepts a string and returns the length of 
// the longest substring with all distinct characters.

function findLongestSubstring(str){
    let i=0;
    let longest = 0;
    let obj = {};

    while(i < str.length){
        let char = str[i];
        if(!obj[char]){
            obj[char] = i;
            i++;
        } else {
            longest = Math.max(longest, (Object.keys(obj)).length);
            i = obj[char] + 1;
            obj = {};
        }
    }
    return Math.max(longest, (Object.keys(obj)).length);
}

console.log(findLongestSubstring('longestsubstring'));

// function findLongestSubstring(str) {
//     let longest = 0;
//     let obj = {};
//     let start = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (obj[str[i]]) {
//         start = Math.max(start, obj[str[i]]);
//       }
//       longest = Math.max(longest, i - start + 1);
//       obj[str[i]] = i + 1;
//     }
//     return longest;
// }

