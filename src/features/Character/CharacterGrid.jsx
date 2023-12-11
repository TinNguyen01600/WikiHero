import CharacterItem from './CharacterItem'

const CharacterGrid = ({ characters }) => {

    return (
        <>
            {characters.map(char => (
                <CharacterItem key={char.id} char={char} />
            ))}
        </>
    )
}

export default CharacterGrid