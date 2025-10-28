/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(n) {
     let revNum=0;
        while(n!=0){
            let digit=n%10;
            revNum=revNum*10+digit;
            n=Math.trunc(n/10);
        }
        if(revNum<-(2**31)||revNum>(2**31)-1) return 0;
        return revNum;
};