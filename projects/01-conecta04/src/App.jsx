import { useState } from "react"
import './App.css'
import { Header } from "./components/Header"
import { User } from "./components/User"
import { USERS, NUMROWS } from "./const"
import { Board } from "./components/Board"
import { searchWinner } from "./logic/search"
import { Winner } from "./components/Winner"

function App() {
  const [turn, setTurn] = useState(USERS.X)
  const [winner, setWinner] = useState(null)
  const [board, setBoard] = useState(Array(7).fill(null).map(() => Array(6).fill(null)))

  const resetBoard = () => {
    setBoard(Array(7).fill(null).map(() => Array(6).fill(null)))
    setTurn(USERS.X)
    setWinner(null)
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

    searchWinner(board, index, NUMROWS - indice, turn, setWinner)
  }

  return (
    <main>
      <Header title={'Conecta 04'} user={USERS} />
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
      {
        winner != null
          ? <Winner user={winner} fn={resetBoard}></Winner>
          : false
      }
    </main>
  )
}
export default App