import React from 'react'
import { Form } from 'react-bootstrap'

const Input = () => {
  return (
    <Form.Group controlId='mascota'>
      <Form.Label>Nombre de la mascota:</Form.Label>
      <Form.Control type='text' placeholder='Ej: Firulais' />
    </Form.Group>
  )
}

export default Input