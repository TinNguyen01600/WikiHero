import { Link } from "react-router-dom"

const Detail = ({ char }) => {
    const alignment = char.biography.alignment === 'bad'
        ? ' villain'
        : char.biography.alignment === 'good'
            ? ' hero'
            : 'neutral'

    return (
        <div className="detail">
            <div className="detail-container">
                <img src={char.images.lg} alt="" />
                <Link to="/">Go back</Link>
            </div>
            <div className="detail-text">
                <h1>{char.name}</h1>
                <div>
                    {char.name} is a character created by {char.biography.publisher}.
                    <ul>
                        <li>Full Name: {char.biography.fullName}</li>
                        <li>First debuted: {char.biography.firstAppearance}</li>
                        <li>Place of birth</li>
                        <li>Race</li>
                        <li>Height</li>
                        <li>Weight</li>
                        <li>Alignment: {alignment}</li>
                        <li>Work</li>
                        <li>Residence</li>
                        <li>Also known as: </li>
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
                </div>
            </div>
        </div>
    )
}

export default Detail