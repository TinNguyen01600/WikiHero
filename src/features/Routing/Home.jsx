import SortMenu from "../SortMenu/SortMenu"
import AllCharacters from "../Character/AllCharacters"
import Header from '../../components/Header.jsx'
import SearchBar from '../Search Bar/SearchBar.jsx'
import sortMenuSelect from '../SortMenu/sortMenuSelect.js'

const Home = ({ results }) => {
    // Sort characters with menu
    results = sortMenuSelect(results)

    return (
        <>
            <Header />
            <div className="container">
                <SearchBar />
                <SortMenu />
            </div>
            <AllCharacters characters={results} />
        </>
    )
}

export default Home