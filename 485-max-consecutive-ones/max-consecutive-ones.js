/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let curr=0;
    let res=0;
    for(let item of nums){
        if(item==1){
            curr++;
            res=Math.max(res,curr);
        }
        else{
            curr=0;
        }

    }
    return res;
};