import  { useState, useEffect } from 'react'
import axios from "axios"

const ComponenteAPI = () => {
    const urlAPI = "https://pokeapi.co/api/v2/pokemon/";
    const [nuevoValorFecht, setNuevoValorFecht] =  useState(0);
    const [nuevoValorAxios, setNuevoValorAxios] =  useState(0);
    const [data, setData] = useState([]);

    const pokeAxios = axios.create({
        baseURL: urlAPI,
      });

    const getPokemonAxios = () => {    
        pokeAxios.get(nuevoValorAxios)
            .then(response => {
                //console.log(response.data);
                setData(response.data)
            })
            .catch(error => {
                console.log(error);
            });
        }

    const getPokemonFecht = () => {
        fetch(urlAPI+nuevoValorFecht)
        .then(response => response.json())
        .then(data => setData(data))
        // .then(data => console.log(data))
        .catch(error => console.error(error));
    }

    return (
    <>
    <h2>ComponenteAPI</h2>
    <div>
    <input 
        type="text"
        value={nuevoValorFecht}
        onChange={(e) => setNuevoValorFecht(e.target.value)}
    />    
    <button onClick={getPokemonFecht}>Llamar API (Fecht)</button>
    </div>
    <div>
    <input 
        type="text"
        value={nuevoValorAxios}
        onChange={(e) => setNuevoValorAxios(e.target.value)}
    />    
    <button onClick={getPokemonAxios}>Llamar API (Axios)</button>
    </div>
    <br /><br /><br />
    <p>id = {data.id}</p>
    <p>name = {data.name}</p>
    <p>base_experience = {data.base_experience}</p>
    {/* {data.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.base_experience}</p>
        </div>
      ))} */}
    <div></div>
    </>
    
  )
}

export default ComponenteAPI