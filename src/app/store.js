import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from '../features/counter/counterSlice'
import pokemonSlice from "../features/pokemonSlice";
import thunk from 'redux-thunk'
// import { createSlice } from "@reduxjs/toolkit";

// export const store = configureStore({
//     reducer: {counter: counterSlice},
//     middleware: [thunk],
// })

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
  middleware: [thunk],
});

// export const store = configureStore({
//     reducer: {counter: createSlice,}
// })

// const slice = createSlice ({
//     name: "counter",
//     initialState: {
//         value: 0,
//     },
//     reducers: {
//         increment: (state) => {
//             state.value += 1;
//         },
//         decrement: (state) => {
//             state.value -= 1;
//         },
//     },
// });

// export const { increment, decrement } = slice.actions;
// export default slice.reducer;