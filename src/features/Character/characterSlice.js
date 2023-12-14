import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const characterSlice = createSlice({
    name: 'character',
    initialState: {
        characters: [],
        selectedChar: null
    },
    reducers: {
        setCharacterList: (state, action) => {
            state.characters = action.payload
        },
        detailedCharSelect: (state, action) => {
            state.selectedChar = action.payload
        }
    }
})

export const { setCharacterList, detailedCharSelect } = characterSlice.actions
export const fetchAllCharacters = () => async (dispatch) => {
    const res = await axios('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    let rawData = res.data
    const overallPower = (char) => {
        const totalPower = Object.keys(char.powerstats).map(stat => char.powerstats[stat]).reduce((total, num) => total + num)
        return Math.floor(totalPower / 6)
    }
    for (let i = 0; i < rawData.length; i++) {
        rawData[i] = { ...rawData[i], overallPower: overallPower(rawData[i]) }
    }
    dispatch(setCharacterList(rawData))
}
export default characterSlice.reducer