/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length
    let cols = board[0].length 
    let visit = new Set()
    
    function backtracking(row, col, i){
        if(i == word.length) return true;

        if(row < 0 || col < 0 || row >= rows || col >= cols ||
        board[row][col] !== word[i] || visit.has(`${row},${col}`)) {
            return false
        }

        visit.add(`${row},${col}`)

        let result = 
        backtracking(row + 1, col, i + 1) ||
        backtracking(row - 1, col, i + 1) ||
        backtracking(row, col + 1, i + 1) ||
        backtracking(row, col - 1, i + 1)
        
        visit.delete(`${row},${col}`)

        return result
    }

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(backtracking(r, c, 0)){
                return true
            }
        }
    }

    return false
};
