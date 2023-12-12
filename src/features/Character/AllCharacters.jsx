import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchAllCharacters } from './characterSlice'
import CharacterGrid from './CharacterGrid'
import MyPagination from './MyPagination'

const AllCharacters = () => {
    const characters = useSelector(state => state.character.characters)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllCharacters())
    }, [])

    // Change page
    const [currentPage, setCurrentPage] = useState(1)
    const charsPerPage = 6;
    const indexOfLastChar = currentPage * charsPerPage
    const indexOfFirstChar = indexOfLastChar - charsPerPage
    const currentChars = characters.slice(indexOfFirstChar, indexOfLastChar)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            <CharacterGrid characters={currentChars} />
            <MyPagination charsPerPage={charsPerPage} paginate={paginate}/>
        </>
    )
}
export default AllCharacters