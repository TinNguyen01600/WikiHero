import SortMenu from "../SortMenu/SortMenu"
import AllCharacters from "../Character/AllCharacters"

const Home = ({ results }) => {
    return (
        <>
            <div className="container">
                <SortMenu />
            </div>
            <AllCharacters characters={results} />
        </>
    )
}

export default Home