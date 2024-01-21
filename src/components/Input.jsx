import React from 'react'
import { Form } from 'react-bootstrap'

const Input = ({elemento, label, placeholder, type, name, minlength, maxlength, min, max}) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as={elemento} 
        label={label}
        type={type}
        placeholder={placeholder}
        minLength={minlength}
        maxLength={maxlength}
        min={min}
        max={max}
        required
      />
    </Form.Group>
  )
}

export default Input