/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let startIndex = 0;
        let endIndex = n;
        let index = Math.ceil(n / 2);
        
        while(true) {
            const isBad = isBadVersion(index);
            if(isBad) {
                endIndex = index;
                const middle = Math.ceil((endIndex - startIndex) / 2);
                if(endIndex - startIndex === 1 && isBad) break;
                index = index - middle;
            } else {
                startIndex = index;
                const middle = Math.ceil((endIndex - startIndex) / 2);
                if(endIndex - startIndex === 1 && isBad) break;
                index = index + middle;
            }
        }
        return index;
        
    };
};