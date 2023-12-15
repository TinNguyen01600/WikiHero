import DC_logo from '../../img/DC_logo.png'
import { useSelector } from 'react-redux'
import AllCharacters from '../Character/AllCharacters'
import SearchBar from '../Search Bar/SearchBar'
import SortMenu from '../SortMenu/SortMenu'
import { useState } from 'react'
import filterCharacter from '../Search Bar/filterCharacter'
import sortMenuSelect from '../SortMenu/sortMenuSelect'

const DCComics = () => {
    let characters = useSelector(state => state.character.characters)
    characters = [...characters]
    characters = characters.filter(item => item.biography.publisher === 'DC Comics')

    // Sort characters with menu
    characters = sortMenuSelect(characters)

    // Filter characters by search bar
    const [query, setQuery] = useState('')
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    characters = filterCharacter(characters, query)

    return (
        <div className="DC">
            <header className="center">
                <img src={DC_logo} alt="" />
            </header>
            <div className="container">
                <SearchBar onChange={handleChange} query={query} />
                <SortMenu />
            </div>
            <AllCharacters characters={characters} />
        </div>
    )
}

export default DCComics