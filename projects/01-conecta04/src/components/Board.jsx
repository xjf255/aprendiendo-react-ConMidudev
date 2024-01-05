import { Fill } from "./Fill"

export const Board = ({ rows, turn, action, index }) => {
  const handleClick = () => {
    action(index, turn)
  }
  return (
    <tr key={index} onClick={handleClick}>
      {
        rows.map((_, indexFill) => {
          // console.log(_)
          return (
            <Fill key={indexFill}
              style={_} />
          )
        })
      }
    </tr>

  )
}