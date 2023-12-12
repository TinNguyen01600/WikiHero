import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { detailedCharSelect } from "./characterSlice"

const CharacterItem = ({ char }) => {
    const dispatch = useDispatch()

    return (
        <>
            <Link to="/detail">
                <div className="card" onClick={() => dispatch(detailedCharSelect(char))}>
                    <div className="card-inner">
                        <div className="card-front">
                            <img src={char.images.sm} alt="" />
                        </div>
                        <div className="card-back" style={
                            char.biography.publisher === 'DC Comics'
                                ? { backgroundColor: '#0476F2' }
                                : char.biography.publisher === 'Marvel Comics'
                                    ? { backgroundColor: '#9e1010' }
                                    : char.biography.publisher === 'Dark Horse Comics'
                                        ? { backgroundColor: '#bd5902' }
                                        : { backgroundColor: '#000000' }
                        }>
                            <h1>{char.name}</h1>
                            <ul>
                                <li>Full Name: {char.biography.fullName ? char.biography.fullName : char.name}</li>
                                <li>Overall Power: {char.overallPower}</li>
                                <li>Publisher: {char.biography.publisher}</li>
                                <li>Alignment: {char.biography.alignment}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CharacterItem