export const Fill = ({ style = '' }) => {
  if (style === null)
    return (
      <td>
        <div className={'elements'} />
      </td>);

  style === true ? style = 'elements--one' : style = 'elements--two';

  return (
    <td>
      <div className={style} />
    </td>
  )
}