class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums)==1:return 1;
        i=1;
        j=1;
        for i in range(1,len(nums)):
            if nums[i]!=nums[j-1]:
                nums[j]=nums[i];
                j=j+1;
        return j;
        