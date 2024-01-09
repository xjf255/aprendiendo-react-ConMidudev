import { useState } from "react"
import './App.css'
import { Header } from "./components/Header"
import { User } from "./components/User"
import { USERS, NUMROWS } from "./const"
import { Board } from "./components/Board"
import { search } from "./logic/search"

function App() {
  const [turn, setTurn] = useState(USERS.X)
  const [board, setBoard] = useState(Array(7).fill(null).map(() => Array(6).fill(null)))

  const searchWinner = (column, row, turn) => {
    const position = board[column][row];
    //down
    if (position == board[column][row + 1]) search.down(board, column, row, turn)
    //diagonals
    if (board[column][row] == board[column + 1][row + 1] || board[column][row] == board[column - 1][row - 1]) search.leftDown(board, column, row, turn)
    if (board[column][row] == board[column + 1][row - 1] || board[column][row] == board[column - 1][row + 1]) search.leftUp(board, column, row, turn)
    //sides
    if (position == board[column - 1][row] || position == board[column + 1][row]) search.slides(board, column, row, turn)
  }

  // const resetBoard = () => {
  //   for (let i = 0; i < board.length; i++) {
  //     console.log(board[i],board[i].includes(null))
  //     if (board[i].includes(null)) return
  //     else if (i === 6) setBoard(Array(7).fill(null).map(() => Array(6).fill(null)))
  //   }
  // }
  const resetBoard = () => {
    setBoard(Array(7).fill(null).map(() => Array(6).fill(null)))
  }


  const updateBoard = (index, turn) => {
    if (!board[index].includes(null)) return

    const newBoard = [...board]
    const columnReversed = newBoard[index]
      .slice()
      .reverse()
      .map((el, indice) => {
        if (el === null) return indice;
      })
      .filter(el => el !== undefined)
    const indice = columnReversed.shift()

    turn === USERS.X
      ? newBoard[index][NUMROWS - indice] = true
      : newBoard[index][NUMROWS - indice] = false;

    setBoard(newBoard)

    const newTurn = turn === USERS.X ? USERS.Y : USERS.X;
    setTurn(newTurn)

    searchWinner(index, NUMROWS - indice, turn)
  }

  return (
    <main>
      <Header title={'Conecta 04'} user={USERS} reset={resetBoard} />
      <User turn={turn} playerOne={USERS.X} playerTwo={USERS.Y} />
      <table className="board">
        <tbody>
          {
            board.map((_, index) => {
              return (
                <Board key={index}
                  rows={_}
                  index={index}
                  turn={turn}
                  action={updateBoard} />
              )
            })
          }
        </tbody>
      </table>
    </main>
  )
}
export default App