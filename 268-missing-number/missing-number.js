/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n=nums.length;
    let sum1=n*(n+1)/2;
    let sum2=0;
    for(let i of  nums){
        sum2+=i
    }
    return sum1-sum2;
};