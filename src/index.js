import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './routes';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

const router= createBrowserRouter(routes)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <RouterProvider router={router} />
    </Provider> */}
    <App />
  </React.StrictMode>
);


