/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(str) {
    let joined = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let l=0;
    let r=joined.length-1;
    while(l<r){
        if(joined[l]!=joined[r])return false;
        l++;
        r--;
    }
    return true;
};