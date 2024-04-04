import { SectionTypes, type FromLanguage, type Language } from './Types.d'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from './constant'

type Props =
  | { type: SectionTypes.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: SectionTypes.To, value: Language, onChange: (language: Language) => void }

export const LanguageSelector = ({ onChange, type, value }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <select name={type === 'from' ? SectionTypes.From : SectionTypes.To} onChange={handleChange} value={value}>
      {type === SectionTypes.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => {
        return (
          <option key={key} value={key}>{literal}</option>
        )
      })}
    </select>
  )
}
