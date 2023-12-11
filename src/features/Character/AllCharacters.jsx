import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchAllCharacters } from './characterSlice'
import CharacterGrid from './CharacterGrid'
import MyPagination from './MyPagination'

const AllCharacters = () => {
    const characters = useSelector(state => state.character.characters)
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1)
    const charsPerPage = 6;

    const indexOfLastChar = currentPage * charsPerPage
    const indexOfFirstChar = indexOfLastChar - charsPerPage
    const currentChars = characters.slice(indexOfFirstChar, indexOfLastChar)

    useEffect(() => {
        dispatch(fetchAllCharacters())
    }, [])

    return (
        <>
            <CharacterGrid characters={currentChars} />
            <MyPagination />
        </>
    )
}
export default AllCharacters