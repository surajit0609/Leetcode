class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        max1=0;
        count=0;
        for num in nums:
            if num==1:
                count+=1;
                max1=max(max1,count);
            else:
                count=0;
        return max1;
        