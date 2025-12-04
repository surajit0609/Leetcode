/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let n=s.length;
    let m=t.length;
    if(n!=m) return false;
    let map=new Map();
    for(let char of s){
        if(map.has(char)){
            map.set(char,map.get(char)+1);
        }
        else{
            map.set(char,1);
        }
    }
    for(let newchar of t){
        if(!map.has(newchar)||map.get(newchar)==0) return false;
        else{
            map.set(newchar,map.get(newchar)-1);
        }
    }
    return true;
};