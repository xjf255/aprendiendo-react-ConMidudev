export const Winner = ({ user, fn }) => {
    const handleClick = () => {
        fn()
    }
    return (
        <div className="modal">
            <article className="winner__modal">
                <h1>GANADOR</h1>
                <p className="winner">{user}</p>
                <button onClick={handleClick}>Empezar de nuevo</button>
            </article>
        </div>
    )
}