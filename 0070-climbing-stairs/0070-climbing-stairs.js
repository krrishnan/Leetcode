/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;
    const ans = Array(n);
    ans[n-1] = 1;
    ans[n-2] = 1;
    for(i = n-2; i > 0; i--) {
        ans[i-1] = ans[i] + ans[i+1];
    }
    return ans[0]+ans[1];
    
    
};