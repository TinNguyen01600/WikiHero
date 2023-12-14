import SortMenu from "../SortMenu/SortMenu"
import AllCharacters from "../Character/AllCharacters"
import Header from '../../components/Header.jsx'
import SearchBar from '../Search Bar/SearchBar.jsx'
import sortMenuSelect from '../SortMenu/sortMenuSelect.js'
import filterCharacter from "../Search Bar/filterCharacter.js"
import { useState } from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom";

const Home = ({ results }) => {
    // Sort characters with menu
    results = sortMenuSelect(results)

    // Filter characters by search bar
    const [query, setQuery] = useState('')
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    results = filterCharacter(results, query)

    return (
        <>
            <Header />
            <div className="container">
                <SearchBar onChange={handleChange} query={query} />
                <SortMenu />
            </div>
            <Link to="/marvel"><Button>Marvel</Button></Link>
            <AllCharacters characters={results} />
        </>
    )
}

export default Home