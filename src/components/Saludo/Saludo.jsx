import React from 'react'
import './Saludo.css';

const Saludo = ({nombre}) => {
  return (
    <h1 className='saludo'>Hola {nombre}!!!!</h1>
  )
}

export default Saludo