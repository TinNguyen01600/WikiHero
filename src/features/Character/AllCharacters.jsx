import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllCharacters } from './characterSlice'
import CharacterGrid from './CharacterGrid'

const AllCharacters = () => {
    const characters = useSelector(state => state.character.characters)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllCharacters())
    }, [])

    return (
        <CharacterGrid characters={characters}/>
    )
}
export default AllCharacters