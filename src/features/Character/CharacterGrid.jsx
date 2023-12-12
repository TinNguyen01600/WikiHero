import CharacterItem from './CharacterItem'

const CharacterGrid = ({ characters }) => {
    return (
        <div style={{color: 'white'}}>
            {characters.map(char => (
                <CharacterItem key={char.id} char={char} />
            ))}
        </div>
    )
}

export default CharacterGrid