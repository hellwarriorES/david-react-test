import {useState, memo} from 'react'
import ComponenteSaludo from "../components/ComponenteSaludo/ComponenteSaludo"
import Saludo from '../components/ComponenteSaludo/Saludo';

const VistaEstado = () => {
    const [estado, setEstado] =  useState(false);
    const cambiaEstado = () => setEstado(estadoanterior => !estadoanterior)
    const ComponenteMemoizado = memo(ComponenteSaludo);

    return (
    <>
        {/* <ComponenteSaludo /> */}
        {/* <ComponenteMemoizado /> */}
        <Saludo />
        <button onClick={cambiaEstado}>Cambiar estado</button>
        <h2>Estado =  {estado + ''}</h2>
    </>
  )
}

export default VistaEstado