import { useState } from "react"
import './App.css'
import { Header } from "./components/Header"
import { User } from "./components/User"
import { USERS } from "./const"
import { Board } from "./components/Board"

function App() {
  const [turn, setTurn] = useState(USERS.X)

  const select = (index, turn) => {
    const newTurn = turn === USERS.X ? USERS.Y : USERS.X;
    setTurn(newTurn)
  }
  return (
    <main>
      <Header title={'Conecta 04'} user={USERS} />
      <User turn={turn} playerOne={USERS.X} playerTwo={USERS.Y} />
      <Board fn={select} />
    </main>
  )
}
export default App