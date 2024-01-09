export const search = {
    down: (board, column, row, winner) => {
        const position = board[column][row]
        let count = 0;
        for (let i = 1; i < 4; i++) {
            if (row + i == 6) return
            if (position == board[column][row + i]) count++
            else break
            count === 3 ? alert(winner) : false;
        }
    },
    slides: (board, column, row, winner) => {
        const position = board[column][row]
        let count = 0;
        if (position == board[column - 1][row]) {
            for (let i = 1; i < 4; i++) {
                if (column - i == -1) return
                if (position == board[column - i][row]) count++
                else break
            }
        }
        if (count === 3) alert(winner)
        else if (position == board[column + 1][row]) {
            for (let i = 1; i < 4; i++) {
                if (column - i == 7) return
                if (position == board[column + i][row]) count++
                else break
            }
        }
        count === 3 ? alert(winner) : false;
    },
    leftUp: (board, column, row, winner) => {
        console.log(column,row)
        const position = board[column][row]
        let count = 0;
        if (position == board[column + 1][row - 1]) {
            for (let i = 1; i < 4; i++) {
                if (column + i === 7 || row - i === -1) return
                if (position == board[column + i][row - i]) count++
                else break
            }
        }
        if (count === 3) alert(winner)
        else if (position == board[column - 1][row + 1]) {
            for (let i = 1; i < 4; i++) {
                if (column - i === -1 || row + i === -1) return
                if (position == board[column - i][row + i]) count++
                else break
            }
        }
        if (count === 3) alert(winner)
    },
    leftDown: (board, column, row, winner) => {
        console.log(column,row)
        const position = board[column][row]
        let count = 0;
        if (position == board[column + 1][row + 1]) {
            for (let i = 1; i < 4; i++) {
                if (column+i === 7 || row+i === -1) return
                if (position == board[column + i][row + i]) count++
                else break
            }
        }
        if (count === 3) alert(winner)
        else if (position == board[column - 1][row - 1]) {
            for (let i = 1; i < 4; i++) {
                if (column - i == 7) return
                if (position == board[column - i][row - i]) count++
                else break
            }
        }
        if (count === 3) alert(winner)
    }
}