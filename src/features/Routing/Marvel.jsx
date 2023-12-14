import marvel_logo from '../../img/Marvel_Logo.png'
import { useSelector } from 'react-redux'
import AllCharacters from '../Character/AllCharacters'

const Marvel = () => {
    let characters = useSelector(state => state.character.characters)
    characters = [...characters]
    return (
        <div className="marvel">
            <header className="center">
                <img src={marvel_logo} alt="" />
            </header>
            <AllCharacters characters={characters} />
        </div>
    )
}

export default Marvel