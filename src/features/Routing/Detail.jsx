import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useSelector } from 'react-redux'

const Detail = () => {
    const char = useSelector(state => state.character.selectedChar)

    const alignment =
        char.biography.alignment === "bad"
            ? " villain"
            : char.biography.alignment === "good"
                ? " hero"
                : "neutral";

    let aliases = ''
    for (let i of char.biography.aliases) { aliases += i + '; ' }
    let height = ''
    for (let i of char.appearance.height) { height += i + '; ' }
    let weight = ''
    for (let i of char.appearance.weight) { weight += i + '; ' }
    
    const further = (char.biography.publisher !== 'Marvel Comics'
        && char.biography.publisher !== 'DC Comics'
        && char.biography.publisher !== 'Dark Horse Comics')
        ? ''
        : char.biography.publisher === 'Marvel Comics'
            ? <span>For further information, please visit <a href="https://www.marvel.com/characters">Marvel</a></span>
            : char.biography.publisher === 'DC Comics'
                ? <span>For further information, please visit <a href="https://www.dc.com/characters">DC Comics</a></span>
                : <span>For further information, please visit <a href="https://www.darkhorse.com/">Dark Horse Comics</a></span>

    return (
        <div className="detail">
            <div className="detail-container">
                <img src={char.images.lg} alt="" />
                <div className="Link">
                    <Link to="/">
                        <Button variant="contained" size="large" sx={{ bgcolor: '#6b6eb0' }}>
                            Go back
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="detail-text">
                <h1>{char.name}</h1>
                <div>
                    {char.name} is a character created by {char.biography.publisher}.
                    <ul>
                        <li>Full Name: {char.biography.fullName}</li>
                        <li>First debuted: {char.biography.firstAppearance}</li>
                        <li>Place of birth: {char.biography.placeOfBirth}</li>
                        <li>Race: {char.appearance.race}</li>
                        <li>Height: {height}</li>
                        <li>Weight: {weight}</li>
                        <li>Alignment: {alignment}</li>
                        <li>Work: {char.work.occupation}</li>
                        <li>Residence: {char.work.base}</li>
                        <li>Also known as: {aliases}</li>
                        <li>
                            Power Stats:
                            <ul>
                                <li>Intelligence: {char.powerstats.intelligence}</li>
                                <li>Strength: {char.powerstats.strength}</li>
                                <li>Speed: {char.powerstats.speed}</li>
                                <li>Durability: {char.powerstats.durability}</li>
                                <li>Power: {char.powerstats.power}</li>
                                <li>Combat: {char.powerstats.combat}</li>
                            </ul>
                        </li>
                    </ul>
                    <div>{further}</div>
                </div>
            </div>
        </div>
    )
}

export default Detail