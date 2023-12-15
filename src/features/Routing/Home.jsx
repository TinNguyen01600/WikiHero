import SortMenu from "../SortMenu/SortMenu"
import AllCharacters from "../Character/AllCharacters"
import Header from '../../components/Header.jsx'
import SearchBar from '../Search Bar/SearchBar.jsx'
import sortMenuSelect from '../SortMenu/sortMenuSelect.js'
import filterCharacter from "../Search Bar/filterCharacter.js"
import { useState } from "react"
import { useSelector } from "react-redux"
import MyButtonsGroup from "../../components/MyButtonsGroup.jsx"
import Spinner from "../../components/Spinner.jsx"

const Home = ({ isLoading }) => {
    let characters = useSelector(state => state.character.characters)
    characters = [...characters]
    // Sort characters with menu
    characters = sortMenuSelect(characters)

    // Filter characters by search bar
    const [query, setQuery] = useState('')
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    characters = filterCharacter(characters, query)

    return (
        <>
            <Header />
            <div className="container">
                <SearchBar onChange={handleChange} query={query} />
                <SortMenu />
            </div>
            <MyButtonsGroup />
            {isLoading ? <Spinner /> : <AllCharacters characters={characters} />}
        </>
    )
}

export default Home