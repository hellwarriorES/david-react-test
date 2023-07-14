import { useState, useRef } from "react";
import './ComponenteCambio.scss'

const ComponenteCambio = () => {
  const [activo, setActivo] = useState(false)
  const [texto, setTexto] = useState("Apagado")
  const cambiaEstado = () => setActivo(estadoanterior => !estadoanterior)
  const cambiaTexto = () => activo ? setTexto("Encendido") : setTexto("Apagado")
  const buttonRef = useRef(null)
  const obtenInfo = () => {
    const target = buttonRef.current.target;
    console.log(target);
  }
  //const handleMouseEnter = (event) => {cambiaColorRojo();console.log({event});console.log({activo})}
  //const handleMouseLeave = (event) => {cambiaColorAzul()}
  //const cambiaColorRojo = () => {buttonRef.current.className="red"}
  //const cambiaColorAzul = (event) => {buttonRef.current.className="blue"}
  //const cambiaColorNegro = (event) => {buttonRef.current.className="black"}
  return (
    <>
    <div>ComponenteCambio</div>
    {/* <div><span className={ activo ? "green" : "red"}>Estado: {'' + activo}</span></div> */}
    {/* <div><button ref={buttonRef} onClick={cambiaEstado} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Cambiar Estado</button></div> */}
    {/* <div><button ref={buttonRef} onClick={() => {cambiaEstado();cambiaTexto();}} onMouseEnter={obtenInfo} style={{color: activo ? "green" : "red"}}>{texto}</button></div> */}
    <div>
        <button 
    ref={buttonRef} 
    onClick={() => {cambiaEstado();cambiaTexto();}} 
    onMouseEnter={obtenInfo} 
    className={ `${activo ? "encendido" : "apagado"}`}
    >
        { activo ? "Encendido" : "Apagado" }
        </button>
    </div>
    </>
  )
}

export default ComponenteCambio