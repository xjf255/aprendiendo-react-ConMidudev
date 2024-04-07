import { SectionTypes } from './Types.d'

interface Props {
  type: SectionTypes
  loading?: boolean
  onChange: (value: string) => void
  value: string
}
function getPlaceholder ({ loading, type }: { type: SectionTypes, loading?: boolean }) {
  if (type === SectionTypes.From) return 'Introduccior texto'
  if (loading === true) return 'Cargando...'
  return 'Traducción'
}

const commonStyle = { border: 0, height: '200px', resize: 'none' }

export function TextArea ({ type, loading, value, onChange }: Props) {
  const styles = type === SectionTypes.From
    ? commonStyle
    : { ...commonStyle, backgroundColor: '#f5f5f5' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <textarea
      autoFocus={type === SectionTypes.From}
      placeholder={getPlaceholder({ loading, type })}
      value={value}
      onChange={handleChange}
      style={styles}
    />
  )
}
