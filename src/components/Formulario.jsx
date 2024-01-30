import { Button, Card, Form } from 'react-bootstrap'
import Input from './Input'
import { useState } from 'react'

const Formulario = ({crearCita}) => {
  const [cita, setCita] = useState({
    nombreMascota: '',
    nombreDueno: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })

  const handleNombreMascotaChange = (e) => {
    setCita({...cita, nombreMascota: e.target.value})
  }

  const handleNombreDuenoChange = (e) => {
    setCita({...cita, nombreDueno: e.target.value})
  }

  const handleFechaChange = (e) => {
    setCita({...cita, fecha: e.target.value})
  }

  const handleHoraChange = (e) => {
    setCita({...cita, hora: e.target.value})
  }

  const handleSintomasChange = (e) => {
    setCita({...cita, sintomas: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //  Establecer ID de la cita
    cita.id = crypto.randomUUID()

    crearCita(cita)
    setCita({
      nombreMascota: '',
      nombreDueno: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })
  }
  
  return (
    <section>
      <Card>
        <Card.Header as='h3' className='fw-bold fs-6 px-3'>Llenar el formulario para crear una cita:</Card.Header>
        <Card.Body>
          <Form className='d-flex flex-column' onSubmit={handleSubmit}>
            <Input 
              labelProp="Nombre de mascota"
              placeholderProp="Ej: Firulais"
              typeProp="text"
              nameProp="mascota"
              minlengthProp="2"
              maxlengthProp="25"
              stateProp={cita.nombreMascota}
              setStateProp={handleNombreMascotaChange}
            />
            <Input 
              labelProp="Nombre de dueño"
              placeholderProp="Ej: Pepe"
              typeProp="text"
              nameProp="dueno"
              minlengthProp="2"
              maxlengthProp="25"
              stateProp={cita.nombreDueno}
              setStateProp={handleNombreDuenoChange}
            />
            <Input 
              labelProp="Fecha"
              placeholderProp="Día de la cita (se puede seleccionar hasta el 31/12/2024)"
              typeProp="date"
              nameProp="fecha"
              minProp={new Date().toISOString().split("T")[0]}
              maxProp="2024-12-31"
              stateProp={cita.fecha}
              setStateProp={handleFechaChange}
            />
            <Input 
              labelProp="Hora"
              placeholderProp="Hora de la cita"
              typeProp="time"
              nameProp="hora"
              minProp="09:00"
              maxProp="18:00"
              stateProp={cita.hora}
              setStateProp={handleHoraChange}
            />
            <Input
              elementoProp="textarea"
              labelProp="Síntomas"
              typeProp="text"
              placeholderProp="Describa brevemente los síntomas de su mascota"
              nameProp="sintomas"
              minlengthProp="10"
              maxlengthProp="200"
              stateProp={cita.sintomas}
              setStateProp={handleSintomasChange}
            />
            <Button type='submit' variant='success' className='mt-2 align-self-end'>Agregar nueva cita</Button>
          </Form>
        </Card.Body>
      </Card>
    </section>
  )
}

export default Formulario