import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import Input from './Input'

const Formulario = () => {
  return (
    <section>
      <Card>
        <Card.Header as='h3' className='fw-bold fs-6 px-3'>Llenar el formulario para crear una cita:</Card.Header>
        <Card.Body >
          <Form>
            <Input />
          </Form>
        </Card.Body>
      </Card>
    </section>
  )
}

export default Formulario