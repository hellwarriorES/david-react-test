import React from 'react'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const ComponenteMUI = () => {
  return (
   <>
   {/* <Box sx={{ display: "flex" }}> */}
    <TextField id="nombre" label="Nombre" variant="filled" /><br /><br />
    <TextField id="email" label="Email" variant="filled" /><br /><br />
    <TextField id="mensaje" label="Mensaje" variant="filled" /><br /><br />
    <Button variant="contained">Enviar</Button><br />
    {/* </Box> */}
   </>
   
  )
}

export default ComponenteMUI