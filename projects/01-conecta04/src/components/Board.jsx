import { Circle } from "./Circle"
import { BOARD } from "../const"

export const Board = ({turn,fn}) =>{
    return(
        <table className="board">
        <tbody>
          {
            BOARD.map((_, index) => {
              return (
                <Circle key={index}
                  style={_ === null ? 'elements' : _}
                  turn={turn}
                  action={fn}
                  index={index} />
              )
            })
          }
        </tbody>
      </table>
    )
}