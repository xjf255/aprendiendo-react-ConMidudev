import { useState } from "react";

export const Circle = ({ style, turn, action, index }) => {
    const [rows, setRows] = useState(Array(7).fill(null))
    const numFill = 6;
    const handleClick = (numFill) => {
      action(numFill, turn)
    }
    const add = (numFill) =>{
      const newRow = [...rows]
      newRow[numFill] = true;
      setRows(newRow)
    }

    return (
      <tr id={index} onClick={handleClick}>
        {
          rows.map((_,index) => {
            return (
              <td key={index}>
                <div className={style} onClick={add}/>
              </td>
            )
          })
        }
      </tr>
    )
  }