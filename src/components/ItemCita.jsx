import React from 'react'
import { Button, Card, CardBody, CardHeader, Form } from 'react-bootstrap'
import Input from './Input'

const ItemCita = () => {
  return (
    <section className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column'>
      {/* 
        En caso de no haber citas:
        <h3 className='text-center'>No hay citas</h3> 
      */}
      {/* 
        En caso de haber citas:
      */}
      <Card className='my-2'>
        <CardHeader className='d-flex align-items-center'>
          <img className='mascota' src="../../public/mascotas/beagle.png" alt="mascota" />
          <div className='ms-2'>
            <h4>Mascota: Firulais</h4>
            <p className='m-0'>Dueño: Pepe</p>
          </div>
        </CardHeader>
        <CardBody>
          <Form>
            <Input />
            <Input />
            <Input />
          </Form>
        </CardBody>
        <Button variant='secondary' className='ms-auto me-3 mb-2'>Borrar</Button>
      </Card>
    </section>
  )
}

export default ItemCita