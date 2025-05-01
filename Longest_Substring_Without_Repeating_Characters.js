/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0
    let length = 0
    let window = new Set()

    for(let right = 0; right < s.length; right++){
        while(window.has(s[right])){
            window.delete(s[left])
            left++
        }

        window.add(s[right])
        length = Math.max(right - left + 1, length)
    }
    return length
};
