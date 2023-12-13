import { Link } from "react-router-dom"

const Detail = ({ char }) => {
    const alignment = char.biography.alignment === 'bad' 
                        ? ' villain' 
                        : char.biography.alignment === 'good'
                        ? ' hero'
                        : 'neutral'

    return (
        <div className="detail">
            <img src={char.images.lg} alt="" />
            <div className="detail-text">
                <h1>{char.name}</h1>
                <div>
                    {char.name} is a character created by {char.biography.publisher}.
                    <ul>
                        <li>Full Name: {char.biography.fullName}</li>
                        <li>First debuted: {char.biography.firstAppearance}</li>
                        <li>Alignment: {alignment}</li>
                        <li>Work</li>
                        <li>Residence</li>
                        <li>
                            Power Stats:
                            <ul>
                                <li>Intelligence: {char.powerstats.intelligence}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <Link to="/">Go back</Link>
        </div>
    )
}

export default Detail