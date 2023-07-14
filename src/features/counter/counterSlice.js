import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers:{
        increment(state){
            state.value+=1
        },
        decrement(state){
            state.value-=1
        },
        incrementX(state, action){
            state.value+=parseInt(action.payload)
        },
        decrementX(state, action){
            state.value-=parseInt(action.payload)
        }
    }
})
export const { increment,decrement,incrementX,decrementX } = slice.actions

export default slice.reducer