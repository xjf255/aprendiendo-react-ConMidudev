import './App.css'
import { useStore } from './hooks/useStore'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App () {
  const { fromLanguage, setFromLanguage } = useStore()
  return (
    <>
      <h1>Google translate</h1>
      <button onClick={() => {
        setFromLanguage('es')
      }}>Change to ES</button>
      {fromLanguage}
    </>
  )
}

export default App
