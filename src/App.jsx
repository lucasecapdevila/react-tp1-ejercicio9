import { Container } from 'react-bootstrap'
import './App.css'
import Footer from './components/Footer'
import Formulario from './components/Formulario'

function App() {
  return (
    <>
      <main className="my-4 mainPage">
        <Container>
          <h1 className='text-center display-3'>Administrador de Pacientes de veterinaria</h1>
          <Formulario />
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
