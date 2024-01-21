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
              label="Nombre de mascota"
              placeholder="Ej: Firulais"
              type="text"
              name="mascota"
              minlength="2"
              maxlength="25"
            />
            <Input 
              label="Nombre de dueno"
              placeholder="Ej: Pepe"
              type="text"
              name="dueno"
              minlength="2"
              maxlength="25"
            />
            <Input 
              label="Fecha"
              placeholder="Día de la cita (se puede seleccionar hasta el 31/12/2024"
              type="date"
              name="fecha"
              min={new Date().toISOString().split("T")[0]}
              max="2024-12-31"
            />
            <Input 
              label="Hora"
              placeholder="Hora de la cita"
              type="time"
              name="hora"
              min="09:00"
              max="18:00"
            />
            <Input
              elemento="textarea"
              label="Síntomas"
              type="text"
              placeholder="Describa brevemente los síntomas de su mascota"
              name="sintomas"
              minlength="10"
              maxlength="200"
            />
          </Form>
        </Card.Body>
      </Card>
      <Button type='submit' variant='success' className='mt-2 align-self-end'>Agregar nueva cita</Button>
    </section>
  )
}

export default Formulario