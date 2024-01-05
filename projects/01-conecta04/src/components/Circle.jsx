export const Circle = ({ style, turn, action, index }) => {
    const [rows, setRows] = useState(Array(7).fill(null))
    const numFill = 6;
    const handleClick = () => {
      action(index, turn)
    }
    const add = (numFill) =>{
      const newRow = [...rows]
      newRow[numFill] = true;
      setRows(newRow)
    }

    return (
      <tr id={index} onClick={handleClick}>
        {
          rows.map(_ => {
            return (
              <td key={_}>
                <div className={style} onClick={add}/>
              </td>
            )
          })
        }
      </tr>
    )
  }