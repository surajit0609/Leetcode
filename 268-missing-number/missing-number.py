class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n=len(nums);
        sum=0;
        for el in nums:
            sum+=el;
        sum2=n*(n+1)/2;
        return sum2-sum
        