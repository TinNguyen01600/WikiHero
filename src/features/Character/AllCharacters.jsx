import {  useState } from 'react'
import CharacterGrid from './CharacterGrid'
import MyPagination from './MyPagination'

const AllCharacters = ({ characters }) => {
    // Change page
    const [currentPage, setCurrentPage] = useState(1)
    const charsPerPage = 12;
    const indexOfLastChar = currentPage * charsPerPage
    const indexOfFirstChar = indexOfLastChar - charsPerPage
    const currentChars = characters.slice(indexOfFirstChar, indexOfLastChar)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            <CharacterGrid characters={currentChars} />
            <MyPagination charsPerPage={charsPerPage} paginate={paginate} characters={characters}/>
        </>
    )
}
export default AllCharacters