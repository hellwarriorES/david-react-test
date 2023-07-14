import App from '../App'
import DetalleProducto from '../components/DetalleProducto/DetalleProducto';
import Contacto from '../components/Contacto/Contacto';
import Home from '../components/Home/Home';

const color = "azul";

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/contacto",
        element: <Contacto />,
    },
    {
        path: "/producto/:idProducto",
        element: <DetalleProducto />,
    },

];

  export default routes
  