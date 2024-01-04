import { useState } from "react"
import './App.css'
import { Circle } from "./components/Circle"
import { Header } from "./components/Header"
import { USERS,BOARD } from "./const"

function App() {


  const [turn, setTurn] = useState(USERS.X)

  const select = (index, turn) => {
    if (BOARD[index]) return
    const newTurn = turn === USERS.X ? USERS.Y : USERS.X;
    setTurn(newTurn)
  }
  
  return (
    <main>
      <Header title={'Conecta 04'} user={USERS} />
      <div className="users">
        <span className={turn === USERS.X ? 'isSelected' : 'player--one'}>{USERS.X}</span>
        <span className={turn === USERS.Y ? 'isSelected' : 'player--two'}>{USERS.Y}</span>
      </div>

      <table className="board">
        <tbody>
          {
            BOARD.map((_, index) => {
              return (
                <Circle key={index}
                  style={_ === null ? 'elements' : _}
                  turn={turn}
                  action={select}
                  index={index} />
              )
            })
          }
        </tbody>
      </table>
    </main>
  )
}
export default App