const CharacterItem = ({ char }) => {
    const powerCalculate = (char) => {
        const intelligence = parseInt(char.powerstats.intelligence)
        const strength = parseInt(char.powerstats.strength)
        const speed = parseInt(char.powerstats.speed)
        const durability = parseInt(char.powerstats.durability)
        const power = parseInt(char.powerstats.power)
        const combat = parseInt(char.powerstats.combat)

        return Math.floor((intelligence + strength + speed + durability + power + combat) / 6)
    }

    return (
        <>
            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <img src={char.images.sm} alt="" />
                    </div>
                    <div className="card-back" style={
                        char.biography.publisher === 'DC Comics'
                        ? { backgroundColor: '#0476F2'}
                        : char.biography.publisher === 'Marvel Comics'
                        ? { backgroundColor: '#9e1010' }
                        : char.biography.publisher === 'Dark Horse Comics'
                        ? { backgroundColor: '#bd5902' }
                        : { backgroundColor: '#055902' }
                    }>
                        <h1>{char.name}</h1>
                        <ul>
                            <li>Full Name: {char.biography.fullName ? char.biography.fullName : char.name}</li>
                            <li>Overall Power: {powerCalculate(char)}</li>
                            <li>Publisher: {char.biography.publisher}</li>
                            <li>Alignment: {char.biography.alignment}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharacterItem