/**
 * @param {character[][]} grid
 * @return {number}
 Input: grid = [
    ["0","1","1","1","0"],
    ["0","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
Output: 1
 */
var numIslands = function(grid) {
    let rows = grid.length
    let cols = grid[0].length
    let visit = new Set()
    let count = 0

    var bfs = function(r, c){
        let queue = []

        visit.add(`${r},${c}`)
        queue.push([r, c])

        while(queue.length > 0){
            let [row, col] = queue.shift()

            let directions = [[0, 1],[0, -1],[1,0],[-1,0]]

            for(let [dr, dc] of directions){
                let nr = row + dr
                let nc = col + dc

                if(nr >= 0 && nc >= 0 && nr < rows && nc < cols &&
                grid[nr][nc] == "1" && !visit.has(`${nr},${nc}`)) {
                    queue.push([nr, nc])
                    visit.add(`${nr},${nc}`)
                }
            }
        }
    }

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(grid[r][c] == "1" && !visit.has(`${r},${c}`)){
                count++
                bfs(r, c)
            }
        }
    }
    return count
};
