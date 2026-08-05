class Solution(object):
    def revers(self,l,r,nums):
        while(l<r):
            nums[l],nums[r]=nums[r],nums[l]
            l+=1;
            r-=1;
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        n=len(nums);
        k=k%n;
        self.revers(n-k,n-1,nums);
        self.revers(0,n-k-1,nums);
        self.revers(0,n-1,nums);
        