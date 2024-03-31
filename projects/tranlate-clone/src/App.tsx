import './App.css'
import { SUPPORTED_LANGUAGES } from './constant'
import { useStore } from './hooks/useStore'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App () {
  const { fromLanguage, setFromLanguage, toLanguage, interchangeLanguages } = useStore()
  return (
    <>
      <h1>Google translate</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <select name='from'>
                {Object.entries(SUPPORTED_LANGUAGES).map(el => {
                  return (
                    <option key={el[0]} value={el[0]}>{el[1]}</option>
                  )
                })}
              </select>

              <textarea name='text' placeholder='Ingresar texto' autoFocus />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => { interchangeLanguages() }}>
                Change
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <select name='to'>
                {Object.entries(SUPPORTED_LANGUAGES).map(el => {
                  return (
                    <option key={el[0]} value={el[0]}>{el[1]}</option>
                  )
                })}
              </select>
              <textarea name='text' disabled placeholder='Traducción' />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
