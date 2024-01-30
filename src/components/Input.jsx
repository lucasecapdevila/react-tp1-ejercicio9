import React from 'react'
import { Form } from 'react-bootstrap'

const Input = ({elementoProp, labelProp, placeholderProp, typeProp, nameProp, minlengthProp, maxlengthProp, minProp, maxProp, setStateProp, stateProp}) => {
  return (
    <Form.Group controlId={nameProp}>
      <Form.Label>{labelProp}</Form.Label>
      <Form.Control
        as={elementoProp} 
        label={labelProp}
        type={typeProp}
        placeholder={placeholderProp}
        minLength={minlengthProp}
        maxLength={maxlengthProp}
        min={minProp}
        max={maxProp}
        name={nameProp}
        value={stateProp}
        onChange={setStateProp}
        required
      />
    </Form.Group>
  )
}

export default Input