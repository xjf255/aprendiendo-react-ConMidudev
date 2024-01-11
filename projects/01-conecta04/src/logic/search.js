const search = {
    down: (board, column, row, player, winner,) => {
        const position = board[column][row]
        let count = 0;
        for (let i = 1; i < 4; i++) {
            if (row + i === 6) return
            if (position == board[column][row + i]) count++
            else break
            count === 3 ? winner(player) : false;
        }
    },
    slides: (board, column, row, player, winner) => {
        const position = board[column][row]
        let count = 0;
        if (!(column - 1 === -1)) {
            if (position === board[column - 1][row]) {
                for (let i = 1; i < 4; i++) {
                    if (column - i === -1) return
                    if (position == board[column - i][row]) count++
                    else break
                }
            }
        }
        if (count === 3) {
            winner(player)
            return
        }
        if (!(column + 1 === 7)) {
            if (position === board[column + 1][row]) {
                for (let i = 1; i < 4; i++) {
                    if (column + i === 7) return
                    if (position == board[column + i][row]) count++
                    else break
                }
            }
        }
        count === 3 ? winner(player) : false;
    },
    leftUp: (board, column, row, player, winner) => {
        const position = board[column][row]
        let count = 0;
        if (!(column + 1 === 7 || row - 1 === - 1)) {
            if (position == board[column + 1][row - 1]) {
                for (let i = 1; i < 4; i++) {
                    if (column + i === 7 || row - i === -1) break
                    if (position == board[column + i][row - i]) count++
                    else break
                }
            }
        }
        if (count === 3) {
            winner(player)
            return
        }
        if (!(column - 1 === -1 || row + 1 === 6)) {
            if (position == board[column - 1][row + 1]) {
                for (let i = 1; i < 4; i++) {
                    if (column - i === -1 || row + i === 6) break
                    if (position === board[column - i][row + i]) count++
                    else break
                }
            }
        }
        if (count === 3) winner(player)
    },
    leftDown: (board, column, row, player, winner) => {
        const position = board[column][row]
        let count = 0;
        if (!(column + 1 === 7 || row + 1 === 6)) {
            if (position == board[column + 1][row + 1]) {
                for (let i = 1; i < 4; i++) {
                    if (column + i === 7 || row + i === 6) break
                    if (position == board[column + i][row + i]) count++
                    else break
                }
            }
        }
        if (count === 3) {
            winner(player)
            return
        }
        if (!(column - 1 === -1 || row - 1 === -1)) {
            if (position == board[column - 1][row - 1]) {
                for (let i = 1; i < 4; i++) {
                    if (column - i === -1 || row - i === -1) break
                    if (position == board[column - i][row - i]) count++
                    else break
                }
            }
        }
        if (count === 3) winner(player)
    }
}

export const searchWinner = (board, column, row, turn, winner) => {
    const position = board[column][row];
    //down
    if (position == board[column][row + 1]) search.down(board, column, row, turn, winner)
    //sides
    if (position == board[column === 0 ? column : column - 1][row] || position == board[column === 6 ? column : column + 1][row]) search.slides(board, column, row, turn, winner)
    //diagonals
    if (board[column][row] == board[column === 6 ? column : column + 1][row === 5 ? row : row + 1] || board[column][row] == board[column === 0 ? column : column - 1][row === 0 ? row : row - 1]) search.leftDown(board, column, row, turn, winner)
    if (board[column][row] == board[column === 6 ? column : column + 1][row === 0 ? row : row - 1] || board[column][row] == board[column === 0 ? column : column - 1][row === 5 ? row : row + 1]) search.leftUp(board, column, row, turn, winner)
}