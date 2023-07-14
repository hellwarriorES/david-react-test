	
import { useParams, useLocation } from 'react-router-dom';

const DetalleProducto = () => {
  const { idProducto } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const palabra = searchParams.get("palabra");
  const pagina = searchParams.get("pagina");
  return (
    <>
    <div>
        <h2>Detalle Producto {idProducto}</h2>
        <ul>
            <li>palabra: {palabra}</li>
            <li>pagina: {pagina}</li>
        </ul>
    </div>
    </>
  )
}

export default DetalleProducto