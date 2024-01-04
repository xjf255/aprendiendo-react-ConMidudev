export const User = ({turn, playerOne, playerTwo}) => {
    return (
      <div className="users">
        <span className={turn === playerOne ? 'isSelected' : 'player--one'}>{playerOne}</span>
        <span className={turn === playerTwo ? 'isSelected' : 'player--two'}>{playerTwo}</span>
      </div>
    )
  }