/**
 * @param {string[]} tokens
 * @return {number}

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
 
 */
/*
stack = [2, 1, +, 3, *]
*/
var evalRPN = function(tokens) {
    let stack = []

    for(let token of tokens){
        if(token === "+"){
            stack.push(stack.pop() + stack.pop()) // 2 + 1 = 3
        } else if(token === "-"){
            let value1 = stack.pop()
            let value2 = stack.pop()
            stack.push(value2 - value1) //  2 - 1 = 1
        } else if(token === "*"){
            stack.push(stack.pop() * stack.pop()) // 2 * 1 = 2
        } else if(token === "/"){
            let valDiv1 = stack.pop()
            let valDiv2 = stack.pop()
            stack.push(Math.trunc(valDiv2 / valDiv1))  // 2 / 1 
        } else{
            stack.push(Number(token))
        }
    }
    return stack[0]
};
