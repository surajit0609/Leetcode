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
    for(i=0;i<n;i++){
        let char=s[i];
        if(map.has(char)){
            map.set(char,map.get(char)+1)
        }
        else{
            map.set(char,1);
        }
    }
     for (let char of t) {
        if (!map.has(char) || map.get(char) === 0) {
            return false;
        }
        map.set(char, map.get(char) - 1);
    }
    return true

};