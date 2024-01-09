export const Header = ({ title,reset }) => {

  const handleClick = () =>{
    reset()
  }

    return (
      <>
        <h1>{title}</h1>
        <button onClick={handleClick}>Reset</button>
      </>
    )
  }