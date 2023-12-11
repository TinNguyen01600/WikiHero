import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const characterSlice = createSlice({
    name: 'character',
    initialState: {
        characters: []
    },
    reducers: {
        setCharacterList: (state, action) => {
            state.characters = action.payload
        },
    }
})

export const { setCharacterList } = characterSlice.actions
export const fetchAllCharacters = () => async (dispatch) => {
    const res = await axios('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    dispatch(setCharacterList(res.data))
}
export default characterSlice.reducer