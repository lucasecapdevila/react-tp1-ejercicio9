import { Container } from 'react-bootstrap'
import './App.css'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import ListaCitas from './components/ListaCitas'

function App() {
  return (
    <>
      <main className="my-4 mainPage">
        <Container>
          <h2 className='text-center display-4'>Administrador de Pacientes de veterinaria</h2>
          <Formulario />
          <ListaCitas />
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
