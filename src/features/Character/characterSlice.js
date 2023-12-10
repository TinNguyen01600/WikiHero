import { createSlice } from "@reduxjs/toolkit";

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
    const response = await
        fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    const data = await response.json();
    dispatch(setCharacterList(data))
}
export default characterSlice.reducer