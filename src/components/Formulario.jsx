import { Button, Card, Form } from 'react-bootstrap'
import Input from './Input'

const Formulario = () => {
  return (
    <section className='d-flex flex-column'>
      <Card>
        <Card.Header as='h3' className='fw-bold fs-6 px-3'>Llenar el formulario para crear una cita:</Card.Header>
        <Card.Body>
          <Form>
            <Input 
              labelProp="Nombre de mascota"
              placeholderProp="Ej: Firulais"
              typeProp="text"
              nameProp="mascota"
              minlengthProp="2"
              maxlengthProp="25"
            />
            <Input 
              labelProp="Nombre de dueño"
              placeholderProp="Ej: Pepe"
              typeProp="text"
              nameProp="dueno"
              minlengthProp="2"
              maxlengthProp="25"
            />
            <Input 
              labelProp="Fecha"
              placeholderProp="Día de la cita (se puede seleccionar hasta el 31/12/2024)"
              typeProp="date"
              nameProp="fecha"
              minProp={new Date().toISOString().split("T")[0]}
              maxProp="2024-12-31"
            />
            <Input 
              labelProp="Hora"
              placeholderProp="Hora de la cita"
              typeProp="time"
              nameProp="hora"
              minProp="09:00"
              maxProp="18:00"
            />
            <Input
              elementoProp="textarea"
              labelProp="Síntomas"
              typeProp="text"
              placeholderProp="Describa brevemente los síntomas de su mascota"
              nameProp="sintomas"
              minlengthProp="10"
              maxlengthProp="200"
            />
          </Form>
        </Card.Body>
      </Card>
      <Button type='submit' variant='success' className='mt-2 align-self-end'>Agregar nueva cita</Button>
    </section>
  )
}

export default Formulario