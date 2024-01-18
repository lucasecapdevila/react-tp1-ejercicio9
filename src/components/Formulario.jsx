import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import Input from './Input'

const Formulario = () => {
  return (
    <section className='d-flex flex-column'>
      <Card>
        <Card.Header as='h3' className='fw-bold fs-6 px-3'>Llenar el formulario para crear una cita:</Card.Header>
        <Card.Body >
          <Form>
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
          </Form>
        </Card.Body>
      </Card>
      <Button variant='success' className='mt-2 align-self-end'>Agregar nueva cita</Button>
    </section>
  )
}

export default Formulario