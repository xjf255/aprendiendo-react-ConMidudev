import './App.css'
import { LanguageSelector } from './LanguageSelector'
import { TextArea } from './TextArea'
import { SectionTypes } from './Types.d'
import { ArrowIcon } from './component/Icons'
import { AUTO_LANGUAGE } from './constant'
import { useStore } from './hooks/useStore'

function App () {
  const { fromLanguage, fromText, result, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage, setResult, setFromText } = useStore()
  return (
    <>
      <h1>Google translate</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <LanguageSelector type={SectionTypes.From} value={fromLanguage} onChange={setFromLanguage} />
              <TextArea type={SectionTypes.From} value={fromText} onChange={setFromText} />
            </td>
          </tr>
          <tr>
            <td>
              <button disabled={fromLanguage === AUTO_LANGUAGE} onClick={() => { interchangeLanguages() }}>
                <ArrowIcon />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <LanguageSelector type={SectionTypes.To} value={toLanguage} onChange={setToLanguage} />
              <TextArea type={SectionTypes.To} value={result} onChange={setResult} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
