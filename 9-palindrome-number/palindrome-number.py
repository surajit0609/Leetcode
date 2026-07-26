class Solution:
    def isPalindrome(self, x: int) -> bool:
        num=x;
        revNum=0;
        if num<0:
            return False;
        while num>0:
            ld=num%10;
            revNum=revNum*10 +ld;
            num=num//10;
        return x==revNum
        
        