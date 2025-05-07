/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let stack = []

    let result = []

    var backtracking = function(openCount, closedCount){
        if(openCount == closedCount && openCount == n){
            result.push(stack.join(""))
            return
        }
        if(openCount < n){
            stack.push("(")
            backtracking(openCount + 1, closedCount)
            stack.pop()
        }
        if(closedCount < openCount){
            stack.push(")")
            backtracking(openCount, closedCount + 1)
            stack.pop()
        }

    }

    backtracking(0, 0)
    return result

};
