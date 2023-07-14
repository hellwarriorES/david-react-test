import { useEffect} from "react";
import './ComponenteMontado.css'

const ComponenteMontado = () => {
  useEffect(() => {console.log("Se ha montado el componente")},[]);
  return (
    <h1>ComponenteMontado</h1>
  )
}

export default ComponenteMontado