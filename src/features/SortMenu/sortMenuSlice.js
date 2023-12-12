import { createSlice } from "@reduxjs/toolkit";

const sortMenuSlice = createSlice({
    name: 'sortMenu',
    initialState: {
        name: true,
        overallPower: false,
        speed: false,

        ascending: true,
        descending: false
    },
    reducers: {
        select: (state, action) => {
            const keys = Object.keys(state).filter(key => (key !== 'ascending' && key!=='descending'))
            keys.forEach(key => state[key] = false)
            state[action.payload] = true
        },
        ascendant: (state) => {
            state.ascending = true
            state.descending = false
        }, 
        descendant: (state) => {
            state.descending = true
            state.ascending = false
        }
    }
})

export const { ascendant, descendant, select } = sortMenuSlice.actions
export default sortMenuSlice.reducer 