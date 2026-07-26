class Solution:
    def reverse(self, x: int) -> int:
        sign= -1 if x<0 else 1;
        num=abs(x);
        if num<10:
            return x
        revNum=0;
        while num>0:
            ld=num%10;
            revNum=revNum*10 +ld;
            num=num//10;
        revNum*=sign;
        if revNum<-(2**31) or revNum>(2**31-1):
            return 0;
        return revNum;
