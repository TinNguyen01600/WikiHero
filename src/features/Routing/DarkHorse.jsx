import dh_logo from '../../img/dh_logo.png'
import { useSelector } from 'react-redux'
import AllCharacters from '../Character/AllCharacters'
import SearchBar from '../Search Bar/SearchBar'
import SortMenu from '../SortMenu/SortMenu'
import { useState } from 'react'
import filterCharacter from '../Search Bar/filterCharacter'
import sortMenuSelect from '../SortMenu/sortMenuSelect'
import MyButtonsGroup from '../../components/MyButtonsGroup'

const DarkHorse = () => {
    let characters = useSelector(state => state.character.characters)
    characters = [...characters]
    characters = characters.filter(item => item.biography.publisher === 'Dark Horse Comics')

    // Sort characters with menu
    characters = sortMenuSelect(characters)

    // Filter characters by search bar
    const [query, setQuery] = useState('')
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    characters = filterCharacter(characters, query)

    return (
        <div className="dark-horse">
            <header className="center">
                <img src={dh_logo} alt="" />
            </header>
            <div className="container">
                <SearchBar onChange={handleChange} query={query} />
                <SortMenu />
            </div>
            <MyButtonsGroup />
            <AllCharacters characters={characters} />
        </div>
    )
}

export default DarkHorse