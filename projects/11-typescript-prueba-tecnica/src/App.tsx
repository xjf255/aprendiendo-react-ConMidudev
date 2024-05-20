import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [state, setState] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=100')
        const data = await response.json()
        setState(data.results)
      } catch (error) {
        console.error('failed to fetch data: ', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <h1>Prueba Tecnica</h1>
      <header>
        <button>Colorear</button>
        <button>Ordenar por Pais</button>
        <button>Resetear estado</button>
        <input type="text" id="txt_buscardor" placeholder='Filtrar por país' />
        <table>
          <thead>
            {/* <tr>
              <td>Foto</td>
              <td>Nombre</td>
              <td>Apellido</td>
              <td>Pais</td>
              <td>Acciones</td>
            </tr> */}
          </thead>
          <tbody>
            {
              JSON.stringify(state)
            }
          </tbody>
        </table>
      </header>
    </>
  )
}

export default App
