import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../features/Character/characterSlice"

const store = configureStore({
    reducer: {
        character: characterReducer,
    }
})

export default store
