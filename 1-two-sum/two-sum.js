/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr=[-1,-1];
    for(let i=0;i<nums.length;i++){
        let val=target-nums[i];
        for(let j=i+1;j<nums.length;j++){
            if(val==nums[j]){
               arr[0]=i;
               arr[1]=j;
               return arr;
            }
        }
    }
    return arr;
};