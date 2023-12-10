import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllCharacters } from './characterSlice'


const CharacterGrid = () => {
    const characters = useSelector(state => state.character.characters)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllCharacters())
    }, [])

    const characterItems = characters.map(char => (
        <div key={char.id} style={{color: 'white'}}>
            <h3>{char.name}</h3>
            <p>{char.biography.publisher}</p>
        </div>
    ))

    return (
        <>
            <h1>Characters</h1>
            {characterItems}
        </>
    )
}

export default CharacterGrid