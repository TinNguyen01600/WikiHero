import SortMenu from "../SortMenu/SortMenu"
import AllCharacters from "../Character/AllCharacters"
import { Link } from "react-router-dom"

const Home = ({ results }) => {
    return (
        <>
            <div className="container">
                <SortMenu />
            </div>
            <AllCharacters characters={results} />
            <Link to="/detail">Detail</Link>
        </>
    )
}

export default Home