import { useState } from "react"
import './App.css'


function App() {
  const USERS = {
    X: 'xjf_255',
    Y: 'boot'
  }
  const [board, setBoard] = useState(Array(63).fill('elements'))
  const [turn, setTurn] = useState(USERS.X)
  const Header = ({title}) => {
    return (
      <>
        <h1>{title}</h1>
      </>
    )
  }
  const select = (index, turn) =>{
    console.log(index)
    const newTurn = turn === USERS.X? USERS.Y:USERS.X;
    setTurn(newTurn)

    const newBoard = [...board]
    newBoard[index] = turn === USERS.X? 'elements--one':'element--two';
    setBoard(newBoard)
  }
  const Circle = ({style, turn, action, index}) => {
    const handleClick = () =>{
      action(index, turn) 
    }

    return (
      <div className={style} onClick={handleClick}/>
    )
  }
  return (
    <main>
      <Header title={'Conecta 04'} user={USERS} />
      <div className="pad">
        <div className="
        ">
          <div className="users">
          <span className={turn === USERS.X?'isSelected':'player--one' }>{USERS.X}</span>
          <span className={turn === USERS.Y?'isSelected':'player--two' }>{USERS.Y}</span>
        </div>
        </div>
        <section className="board">
          {
            board.map((_,index) => {
              return (
                <Circle 
                style={_}
                turn={turn}
                action={select}
                index={index}
                key={index}/>
              )
            })
          }
        </section>
      </div>
    </main>
  )
}
export default App