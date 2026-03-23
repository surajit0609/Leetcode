function check(nums: number[]): boolean {
    let count:number=0;
    let i:number;
    if(nums[0]<nums[nums.length-1])count++;
    for(i=0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1])count++;
    }
    if(count>1) return false;
    return true
};