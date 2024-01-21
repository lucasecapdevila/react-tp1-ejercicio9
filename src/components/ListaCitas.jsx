import React from 'react'
import ItemCita from './ItemCita'
import { Button } from 'react-bootstrap'

const ListaCitas = () => {
  return (
    <section className='row'>
      <h2 className='text-center display-4'>Administra las citas aquí</h2>
      <ItemCita />
    </section>
  )
}

export default ListaCitas