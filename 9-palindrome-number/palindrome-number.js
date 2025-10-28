/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    x=x.toString();
    let l=0;
    let r=x.length-1;
    while(l<r){
        if(x[l]!=x[r]) return false;
        l++;
        r--;
    }
    return true;
};