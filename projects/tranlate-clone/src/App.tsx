import { useEffect } from 'react'
import './App.css'
import { LanguageSelector } from './LanguageSelector'
import { TextArea } from './TextArea'
import { SectionTypes } from './Types.d'
import { ArrowIcon } from './component/Icons'
import { AUTO_LANGUAGE } from './constant'
import { useDebounce } from './hooks/useDebounce'
import { useStore } from './hooks/useStore'
import { translate } from './services/translate'

function App() {
  const { fromLanguage, loading, fromText, result, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage, setResult, setFromText } = useStore()

  const debounceFromText = useDebounce(fromText, 250)

  useEffect(() => {
    if (debounceFromText === '') result

    translate({ fromLanguage, toLanguage, text: debounceFromText })
      .then(result =>{
        console.log(result)
      })
      .catch(error => console.warn(error)
      )
  }, [debounceFromText])

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
              <TextArea type={SectionTypes.To} value={result} onChange={setResult} loading={loading} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
