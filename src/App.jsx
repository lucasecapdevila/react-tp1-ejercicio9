import { Button, Container } from 'react-bootstrap'
import './App.css'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import ListaCitas from './components/ListaCitas'

function App() {
  return (
    <>
      <main className="my-4 mainPage">
        <Container>
          <h1 className='text-center display-4'>Administrador de Pacientes de veterinaria</h1>
          <Formulario />
          <ListaCitas />
          <Button variant='danger' className='mt-3 btnBorrarTodo'>Borrar todas las citas</Button>
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
