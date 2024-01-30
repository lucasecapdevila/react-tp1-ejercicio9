import React from 'react'
import ItemCita from './ItemCita'

const ListaCitas = ({citasProp}) => {
  return (
    <section className='row'>
      <h2 className='text-center display-4'>Administra las citas aquí</h2>
      {citasProp.map((cita, posicionCita) => <ItemCita key={posicionCita} cita={cita} />)}
    </section>
  )
}

export default ListaCitas