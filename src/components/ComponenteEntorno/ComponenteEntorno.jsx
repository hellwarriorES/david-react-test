import React from 'react'

const ComponenteEntorno = () => {
  return (
    <>
    <h1>{process.env.REACT_APP_ENTORNO}</h1>
    <h1>{process.env.NODE_ENV}</h1>
    </>
  )
}

export default ComponenteEntorno