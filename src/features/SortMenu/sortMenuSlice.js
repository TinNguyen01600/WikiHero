import { createSlice } from "@reduxjs/toolkit";

const sortMenuSlice = createSlice({
    name: 'sortMenu',
    initialState: {
        overallPower: true,
        ascending: true,
        descending: false
    },
    reducers: {
        ascendant: (state, action) => {
            state.ascending = action.payload
            state.descending = !action.payload
        }, 
        descendant: (state, action) => {
            state.descending = action.payload
            state.ascending = !action.payload
        }
    }
})

export const { ascendant, descendant } = sortMenuSlice.actions
export default sortMenuSlice.reducer 