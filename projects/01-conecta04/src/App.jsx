import { useState } from "react"
import './App.css'
import { Header } from "./components/Header"
import { User } from "./components/User"
import { USERS } from "./const"
import { Board } from "./components/Board"

function App() {
  const [turn, setTurn] = useState(USERS.X)
  const [board, setBoard] = useState(Array(9).fill(Array(7).fill(null)))

  const updateBoard = (index, turn) => {
    const newTurn = turn === USERS.X ? USERS.Y : USERS.X;
    setTurn(newTurn)

    const newBoard = ...board
    console.log(index)
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
              action={updateBoard}/>
            )
          })
        }
      </tbody>
    </table>
    </main>
  )
}
export default App