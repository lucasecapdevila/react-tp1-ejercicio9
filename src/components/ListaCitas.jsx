import React from 'react'
import ItemCita from './ItemCita'

const ListaCitas = ({cita}) => {
  return (
    <section className='row'>
      <h2 className='text-center display-4'>Administra las citas aquí</h2>
      <p>{cita.nombreMascota}</p>
      <ItemCita />
    </section>
  )
}

export default ListaCitas