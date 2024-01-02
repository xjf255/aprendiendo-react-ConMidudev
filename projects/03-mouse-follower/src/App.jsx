import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [eneable, setEneable] = useState(false)
  
  useEffect(() => {
    console.log('useEffect')

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (eneable) {
      window.addEventListener('pointermove', handleMove)
    }

    return () =>{
      window.removeEventListener('pointermove', handleMove)
    }
  }, [eneable])
  //Hide cursor
  useEffect(() =>{
    if(eneable){
      document.body.classList.toggle('no-cursor')
    }
    return(() =>{
      document.body.classList.remove('no-cursor')
    })
  },[eneable])
  return (
    <main>
      <h1>Project 3</h1>
      <div style={{
        position: 'absolute',
        backgroundColor: '#1a1a1a',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px,${position.y}px)`
      }}
      />
      <button onClick={() => setEneable(!eneable)}>{eneable ? 'Desactivar' : 'Activar'} Seguir puntero</button>
    </main>
  )
}

export default App
