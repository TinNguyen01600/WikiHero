import SortMenu from "../SortMenu/SortMenu"
import AllCharacters from "../Character/AllCharacters"
import Header from '../../components/Header.jsx'


const Home = ({ results }) => {
    return (
        <>
            <Header />
            <div className="container">
                <SortMenu />
            </div>
            <AllCharacters characters={results} />
        </>
    )
}

export default Home