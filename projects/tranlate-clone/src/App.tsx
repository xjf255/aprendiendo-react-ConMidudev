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

  const debounceFromText = useDebounce(fromText, 700)

  useEffect(() => {
    if (debounceFromText === '') result

    translate({ fromLanguage, toLanguage, text: debounceFromText })
      .then(result => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => setResult('error')
      )
  }, [debounceFromText, fromLanguage, toLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => { })
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = 'es'
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }

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
              <div className="box">
                <LanguageSelector type={SectionTypes.To} value={toLanguage} onChange={setToLanguage} />
                <TextArea type={SectionTypes.To} value={result} onChange={setResult} loading={loading} actionCopy={handleClipboard} actionVoice={handleSpeak}/>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
