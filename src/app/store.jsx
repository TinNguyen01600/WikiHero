import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../features/Character/characterSlice"
import sortMenuReducer from "../features/SortMenu/sortMenuSlice"

const store = configureStore({
    reducer: {
        character: characterReducer,
        sortMenu: sortMenuReducer
    }
})

export default store
