import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,incrementX,decrementX } from '../../features/counter/counterSlice'

const Contador = () => {
    const contador = useSelector(state => state.counter.value)
    const [nuevoValor, setNuevoValor] =  useState(0);
    const dispatch = useDispatch()

    const plusContador = () => {
        dispatch(increment())
    }
    const minusContador = () => {
        dispatch(decrement())
    }
    const plusContadorX = () => {
        dispatch(incrementX(nuevoValor))
    }
    const minusContadorX = () => {
        dispatch(decrementX(nuevoValor))
    }
    return (
    <>
    <div>Contador: {contador}</div>
    <button onClick={minusContador}>Menos</button>
    <button onClick={plusContador}>Mas</button>
    <input 
        type="text"
        value={nuevoValor}
        onChange={(e) => setNuevoValor(e.target.value)}
    />    
    <button onClick={minusContadorX}>Menos X</button>
    <button onClick={plusContadorX}>Mas X</button>
    </>
  )
}

export default Contador