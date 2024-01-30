import React from 'react'
import ItemCita from './ItemCita'

const ListaCitas = ({citasProp, eliminarCitaProp}) => {
  const titulo = citasProp.length === 0 ? 'No hay citas' : 'Administra tus citas aquí'

  return (
    <section className='row'>
      <h2 className='text-center display-4'>{titulo}</h2>
      {citasProp.map((cita, posicionCita) => <ItemCita key={posicionCita} cita={cita} eliminarCitaProp={eliminarCitaProp} />)}
    </section>
  )
}

export default ListaCitas