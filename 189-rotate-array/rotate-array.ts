/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const arr=new Array(nums.length);
    let n:number=nums.length;
    let i:number;
    for(i=0;i<nums.length;i++){
        let index:number=(i+k)%n;
        arr[index]=nums[i];
    }
     for (let i = 0; i < n; i++) {
        nums[i] = arr[i];
    }

};