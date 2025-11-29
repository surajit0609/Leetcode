/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s=s.trim();
    let word=s.split(" ");
    let res=[];
    for(let i=word.length-1;i>=0;i--){
        if(word[i]){
            res.push(word[i]);
        }
    }
    return res.join(" ");
};