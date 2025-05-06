/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];

    let result = []
    let queue = [root]

    while(queue.length > 0){
        let level = []
        let queueLength = queue.length
        for(let i = 0; i < queueLength; i++){
            let current = queue.shift() // the node value we remove HINT (FIFO)
            level.push(current.val) // we are adding the current node val to the level array
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }
        result.push(level)
    }
    
    return result
};
