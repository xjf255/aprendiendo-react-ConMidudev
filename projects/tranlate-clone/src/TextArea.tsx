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

const commonStyle = { border: 0, height: '200px' }

export function TextArea ({ type, loading, value, onChange }: Props) {
  const styles = type === SectionTypes.From
    ? commonStyle
    : { ...commonStyle, backgroundColor: '#f5f5f5' }

  return (
    <textarea
      autoFocus={type === SectionTypes.From}
      placeholder={getPlaceholder({ loading, type })}
      value={value}
      style={styles}
    />
  )
}
