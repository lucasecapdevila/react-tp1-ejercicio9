import { Container } from 'react-bootstrap'
import './App.css'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import ListaCitas from './components/ListaCitas'
import { useEffect, useState } from 'react'

function App() {
  const listaCitasLS = JSON.parse(localStorage.getItem('citas')) || []
  const [listaCitas, setListaCitas] = useState(listaCitasLS)

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(listaCitas))
  }, [listaCitas])

  const crearCita = cita => {
    setListaCitas([...listaCitas, cita])
  }

  const eliminarCita = (id) => {
    const copiaCitas = listaCitas.filter(cita => cita.id !== id)
    setListaCitas(copiaCitas)
  }

  return (
    <>
      <main className="my-4 mainPage">
        <Container>
          <h1 className='text-center display-4'>Administrador de Pacientes de veterinaria</h1>
          <Formulario 
            crearCita={crearCita}
          />
          <ListaCitas
            citasProp={listaCitas}
            eliminarCitaProp={eliminarCita}
          />
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
