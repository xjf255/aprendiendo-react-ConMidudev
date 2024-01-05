import { Fill } from "./Fill"

export const Board = ({ rows, action, index}) => {
  const handleClick = () => {
    action(index)
  }
  return (
    <tr key={index} onClick={handleClick}>
      {
        rows.map((_, indexFill) => {
          return (
            <Fill key={indexFill}
              style={'elements'} />
          )
        })
      }
    </tr>

  )
}